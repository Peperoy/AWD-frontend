/**
 * API route: envoi du formulaire de contact par email (Resend).
 * Variables d'environnement requises :
 * - CONTACT_EMAIL : votre adresse email (destinataire)
 * - RESEND_API_KEY : clé API Resend (https://resend.com)
 *
 * Pour les tests, Resend permet d'envoyer depuis onboarding@resend.dev
 * sans vérification de domaine. En production, ajoutez et vérifiez votre domaine.
 */

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

  const { fullName, email, phone, interestedIn, projectDescription, ndaRequired } = req.body || {};

  if (!fullName || !email) {
    return res.status(400).json({ error: 'Nom et email requis' });
  }

  try {
    const { Resend } = require('resend');
    const resend = new Resend(apiKey);

    const html = `
      <h2>Nouveau message depuis le formulaire Atlas Web Development</h2>
      <p><strong>Nom :</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email :</strong> ${escapeHtml(email)}</p>
      <p><strong>Téléphone :</strong> ${escapeHtml(phone || '—')}</p>
      <p><strong>Sujet d'intérêt :</strong> ${escapeHtml(interestedIn || '—')}</p>
      <p><strong>NDA demandé :</strong> ${ndaRequired ? 'Oui' : 'Non'}</p>
      <h3>Description du projet</h3>
      <p>${escapeHtml(projectDescription || '—').replace(/\n/g, '<br>')}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Atlas Web Development <onboarding@resend.dev>',
      to: contactEmail,
      replyTo: email,
      subject: `[Contact] ${interestedIn || 'Demande'} – ${fullName}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({
        error: 'Échec de l\'envoi',
        message: error.message || 'Impossible d\'envoyer l\'email',
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

function escapeHtml(text) {
  if (typeof text !== 'string') return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
