import { useState } from 'react';
import Link from 'next/link';

const INTEREST_OPTIONS = [
  'Application SaaS & produit web',
  'Automatisation & workflows (n8n)',
  'Stratégie digitale',
  'Site vitrine',
  'Design UI/UX',
  'Maintenance & Support',
  'Autre',
];

const INITIAL = {
  fullName: '',
  email: '',
  phone: '',
  interestedIn: '',
  projectDescription: '',
  ndaRequired: false,
};

export default function ContactFormPanel() {
  const [formData, setFormData] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
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
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSubmitError(data.message || data.error || 'Envoi impossible. Réessayez plus tard.');
        return;
      }
      setSubmitted(true);
      setFormData(INITIAL);
    } catch (err) {
      setSubmitError('Erreur de connexion. Vérifiez votre réseau et réessayez.');
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div id="form" className="card-sharp p-8 lg:p-12">
        <span className="connection-dot" />
        <div className="py-12 text-center">
          <p className="label-caps mb-4">Transmission</p>
          <h2 className="font-display text-3xl font-bold uppercase mb-3">Demande envoyée</h2>
          <p className="text-muted">Nous vous répondrons sous 24 à 48 heures. Merci.</p>
        </div>
      </div>
    );
  }

  return (
    <div id="form" className="card-sharp p-8 lg:p-12">
      <span className="connection-dot" />
      <form onSubmit={handleSubmit} className="space-y-8">
        {submitError && (
          <div className="border border-red-400/40 text-red-300 px-4 py-3 text-sm">{submitError}</div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="label-caps mb-2 block" htmlFor="full-name">
              Nom complet
            </label>
            <input
              className="input-underline"
              id="full-name"
              name="fullName"
              placeholder="Jean Dupont"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="label-caps mb-2 block" htmlFor="email">
              Adresse email
            </label>
            <input
              className="input-underline"
              id="email"
              name="email"
              placeholder="jean@exemple.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="label-caps mb-2 block" htmlFor="phone">
              Téléphone
            </label>
            <input
              className="input-underline"
              id="phone"
              name="phone"
              placeholder="+33 6 00 00 00 00"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="label-caps mb-2 block" htmlFor="subject">
              Sujet d&apos;intérêt
            </label>
            <select
              className="input-underline appearance-none"
              id="subject"
              name="interestedIn"
              value={formData.interestedIn}
              onChange={handleChange}
              required
            >
              <option value="">Choisir une option</option>
              {INTEREST_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-surface text-ink">
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="label-caps mb-2 block" htmlFor="project-description">
            Description du projet
          </label>
          <textarea
            className="input-underline resize-none"
            id="project-description"
            name="projectDescription"
            placeholder="Objectifs, budget, délais…"
            rows="4"
            value={formData.projectDescription}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <input
            className="h-4 w-4 rounded-none border-ink/30 bg-transparent text-gold focus:ring-gold"
            id="nda"
            name="ndaRequired"
            type="checkbox"
            checked={formData.ndaRequired}
            onChange={handleChange}
          />
          <label className="text-sm text-muted" htmlFor="nda">
            Je souhaite signer une NDA avant de partager plus de détails.
          </label>
        </div>
        <button className="btn-gold w-full" type="submit" disabled={sending}>
          {sending ? 'Envoi en cours…' : 'Envoyer ma demande →'}
        </button>
        <p className="text-xs text-center text-muted">
          En soumettant, vous acceptez notre{' '}
          <Link href="/politique-confidentialite">
            <a className="text-gold underline">Politique de confidentialité</a>
          </Link>{' '}
          et nos{' '}
          <Link href="/conditions-generales-utilisation">
            <a className="text-gold underline">Conditions d&apos;utilisation</a>
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
