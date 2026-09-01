import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  PACKS,
  PACK_IDS,
  BUDGET_OPTIONS,
  PROJECT_TYPE_OPTIONS,
  GOAL_OPTIONS,
  TIMELINE_OPTIONS,
  getPackById,
  formatPackRange,
} from '../data/offers';

const INITIAL = {
  pack: '',
  projectType: '',
  siteUrl: '',
  goal: '',
  timeline: '',
  budget: '',
  fullName: '',
  email: '',
  phone: '',
  projectDescription: '',
};

export default function DevisForm({ initialPack = '' }) {
  const [formData, setFormData] = useState({
    ...INITIAL,
    pack: PACK_IDS.includes(initialPack) ? initialPack : '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    if (PACK_IDS.includes(initialPack)) {
      setFormData((prev) => ({ ...prev, pack: initialPack }));
    }
  }, [initialPack]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kind: 'devis',
          ...formData,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSubmitError(data.message || data.error || 'Envoi impossible. Réessayez plus tard.');
        return;
      }
      setSubmitted(true);
      setFormData({ ...INITIAL, pack: PACK_IDS.includes(initialPack) ? initialPack : '' });
    } catch (err) {
      setSubmitError('Erreur de connexion. Vérifiez votre réseau et réessayez.');
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="card-sharp p-8 lg:p-12">
        <span className="connection-dot" />
        <div className="py-12 text-center">
          <p className="label-caps mb-4">Devis</p>
          <h2 className="font-display text-3xl font-bold uppercase mb-3">Demande envoyée</h2>
          <p className="text-muted">Nous vous répondrons sous 24 à 48 heures avec un cadrage. Merci.</p>
        </div>
      </div>
    );
  }

  const selectedPack = getPackById(formData.pack);

  return (
    <div className="card-sharp p-8 lg:p-12">
      <span className="connection-dot" />
      <form onSubmit={handleSubmit} className="space-y-8">
        {submitError && (
          <div className="border border-red-400/40 text-red-300 px-4 py-3 text-sm">{submitError}</div>
        )}
        <div>
          <label className="label-caps mb-2 block" htmlFor="devis-pack">
            Pack
          </label>
          <select
            className="input-underline appearance-none"
            id="devis-pack"
            name="pack"
            value={formData.pack}
            onChange={handleChange}
            required
          >
            <option value="">Choisir un pack</option>
            {PACKS.map((pack) => (
              <option key={pack.id} value={pack.id} className="bg-surface text-ink">
                {pack.title}
              </option>
            ))}
          </select>
          {selectedPack && (
            <div className="mt-2 space-y-2">
              <p className="text-xs text-muted">Indicatif : {formatPackRange(selectedPack)}.</p>
              {selectedPack.extras?.length > 0 && (
                <p className="text-xs text-muted">
                  Options fréquentes :{' '}
                  {selectedPack.extras.map((extra) => extra.label.toLowerCase()).join(', ')}.
                </p>
              )}
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="label-caps mb-2 block" htmlFor="devis-type">
              Situation
            </label>
            <select
              className="input-underline appearance-none"
              id="devis-type"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
            >
              <option value="">Choisir</option>
              {PROJECT_TYPE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-surface text-ink">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label-caps mb-2 block" htmlFor="devis-url">
              URL actuelle
            </label>
            <input
              className="input-underline"
              id="devis-url"
              name="siteUrl"
              placeholder="https://…"
              type="url"
              value={formData.siteUrl}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="label-caps mb-2 block" htmlFor="devis-goal">
              Objectif
            </label>
            <select
              className="input-underline appearance-none"
              id="devis-goal"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              required
            >
              <option value="">Choisir</option>
              {GOAL_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-surface text-ink">
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label-caps mb-2 block" htmlFor="devis-timeline">
              Délai souhaité
            </label>
            <select
              className="input-underline appearance-none"
              id="devis-timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              required
            >
              <option value="">Choisir</option>
              {TIMELINE_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-surface text-ink">
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="label-caps mb-2 block" htmlFor="devis-budget">
              Budget
            </label>
            <select
              className="input-underline appearance-none"
              id="devis-budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            >
              <option value="">Choisir une fourchette</option>
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-surface text-ink">
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label-caps mb-2 block" htmlFor="devis-name">
              Nom complet
            </label>
            <input
              className="input-underline"
              id="devis-name"
              name="fullName"
              placeholder="Jean Dupont"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="label-caps mb-2 block" htmlFor="devis-email">
              Adresse email
            </label>
            <input
              className="input-underline"
              id="devis-email"
              name="email"
              placeholder="jean@exemple.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="label-caps mb-2 block" htmlFor="devis-phone">
              Téléphone
            </label>
            <input
              className="input-underline"
              id="devis-phone"
              name="phone"
              placeholder="+33 6 00 00 00 00"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label className="label-caps mb-2 block" htmlFor="devis-description">
            Description
          </label>
          <textarea
            className="input-underline resize-none"
            id="devis-description"
            name="projectDescription"
            placeholder="Contexte, contraintes, ce que vous attendez…"
            rows="4"
            value={formData.projectDescription}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn-gold w-full" type="submit" disabled={sending}>
          {sending ? 'Envoi en cours…' : 'Envoyer la demande de devis →'}
        </button>
        <p className="text-xs text-center text-muted">
          En soumettant, vous acceptez notre{' '}
          <Link href="/politique-confidentialite">
            <a className="text-gold underline">Politique de confidentialité</a>
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
