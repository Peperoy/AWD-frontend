/**
 * API route: envoi du formulaire de contact / devis par email (Resend).
 * Variables d'environnement requises :
 * - CONTACT_EMAIL : votre adresse email (destinataire)
 * - RESEND_API_KEY : clé API Resend (https://resend.com)
 */

import { Resend } from 'resend';
import { PACK_IDS, PROJECT_TYPE_OPTIONS, getPackById } from '../../data/offers';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const contactEmail = process.env.CONTACT_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  if (!contactEmail || !apiKey) {
    console.error('Contact API: CONTACT_EMAIL ou RESEND_API_KEY manquant dans .env.local');
    return res.status(500).json({
      error: 'Configuration email manquante',
      message: 'Veuillez configurer CONTACT_EMAIL et RESEND_API_KEY dans .env.local',
    });
  }

  const body = req.body || {};
  const kind = body.kind === 'devis' ? 'devis' : 'message';
  const { fullName, email } = body;

  if (!fullName || !email) {
    return res.status(400).json({ error: 'Nom et email requis' });
  }

  if (kind === 'devis' && (!body.pack || !PACK_IDS.includes(body.pack))) {
    return res.status(400).json({
      error: 'Pack requis',
      message: 'Choisissez un pack pour le devis.',
    });
  }

  try {
    const resend = new Resend(apiKey);
    const html = kind === 'devis' ? devisHtml(body) : messageHtml(body);
    const packLabel = kind === 'devis' ? packTitle(body.pack) : body.interestedIn;
    const prefix = kind === 'devis' ? 'Devis' : 'Contact';

    const { data, error } = await resend.emails.send({
      from: 'Atlas Web Development <onboarding@resend.dev>',
      to: contactEmail,
      replyTo: email,
      subject: `[${prefix}] ${packLabel || 'Demande'} – ${fullName}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({
        error: "Échec de l'envoi",
        message: error.message || "Impossible d'envoyer l'email",
      });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Contact API error:', err);
    return res.status(500).json({
      error: 'Erreur serveur',
      message: err.message || 'Une erreur est survenue',
    });
  }
}

function packTitle(id) {
  const pack = getPackById(id);
  return pack ? pack.title : id || '—';
}

function projectTypeLabel(value) {
  const match = PROJECT_TYPE_OPTIONS.find((opt) => opt.value === value);
  return match ? match.label : value || '—';
}

function messageHtml({ fullName, email, phone, interestedIn, ndaRequired, projectDescription }) {
  return `
      <h2>Nouveau message depuis le formulaire Atlas Web Development</h2>
      <p><strong>Nom :</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email :</strong> ${escapeHtml(email)}</p>
      <p><strong>Téléphone :</strong> ${escapeHtml(phone || '—')}</p>
      <p><strong>Sujet d'intérêt :</strong> ${escapeHtml(interestedIn || '—')}</p>
      <p><strong>NDA demandé :</strong> ${ndaRequired ? 'Oui' : 'Non'}</p>
      <h3>Description du projet</h3>
      <p>${escapeHtml(projectDescription || '—').replace(/\n/g, '<br>')}</p>
    `;
}

function devisHtml(body) {
  const {
    fullName,
    email,
    phone,
    pack,
    projectType,
    siteUrl,
    goal,
    timeline,
    budget,
    projectDescription,
  } = body;
  return `
      <h2>Nouvelle demande de devis — Atlas Web Development</h2>
      <p><strong>Nom :</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email :</strong> ${escapeHtml(email)}</p>
      <p><strong>Téléphone :</strong> ${escapeHtml(phone || '—')}</p>
      <p><strong>Pack :</strong> ${escapeHtml(packTitle(pack))}</p>
      <p><strong>Situation :</strong> ${escapeHtml(projectTypeLabel(projectType))}</p>
      <p><strong>URL actuelle :</strong> ${escapeHtml(siteUrl || '—')}</p>
      <p><strong>Objectif :</strong> ${escapeHtml(goal || '—')}</p>
      <p><strong>Délai :</strong> ${escapeHtml(timeline || '—')}</p>
      <p><strong>Budget :</strong> ${escapeHtml(budget || '—')}</p>
      <h3>Description</h3>
      <p>${escapeHtml(projectDescription || '—').replace(/\n/g, '<br>')}</p>
    `;
}

function escapeHtml(text) {
  if (typeof text !== 'string') return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
