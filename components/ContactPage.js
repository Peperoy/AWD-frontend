import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';

const PARTNER_LOGO_1 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDcbTr8uwrZiT5QNOXJ3hCANNAgyovIaAb21LAknLaENhkVU6Hv5QolNZ3Fr576GhHEeGInmNlx8GzsD18N1nqI4LPiRylKIO_b3uTb7f-qMuG1AsYw9Z2zLp8SXMnOtcWqMJtH0YsaMo8IBPFNmXVLpsWQsM4shDco17LlIUrBKWm-xNbGk1tvteba7IZfwTfznzIy91np8Ers1aYh0emOyhGTZWurVxnPdOIWDSllRyE7l_sYeh83yqJ8bFc9zuZwo25ah8biAt0';

const PARTNER_LOGO_2 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuABEhhpCSxcVnNh6fwlbq0HZMNPmYQasEHIqALzyZgftT0SAZ4UQeK0zGSHoZQH7tyXdmRDIf0D_RfWCpzg8VhGtZTOetrwZKGeS2Qor5vNE7o9oHpdj_fu0Ub1AzQayz5kltRtFXPn7iIOxhCzly01krcDUBQ00zsojeuXA1xCBD7IlRj719lCtwcTXRLtG6t8Ys_TZCVeLfuEntI5z8NzuyuxFNnVkJKr-GaPpq7ZwUz_leSL_J2wFuZXQ3Kvu0jXP4Dmrl1audg';

const PARTNER_LOGO_3 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCt9J1aqzCh3YcYNhVwHs0T5EhNqSLnRR95OLbitLf_v-NXfp-TAAZJTpqQJA6LWGI_BNtO7Yvk5S9E7XTvePSF0M9lg_LE9R7HmZCggZ1O-o3ddNq_MVzE6th0HeBjiMCG5B2tDhZfUwHj8ye8-mAjrNeTi2oY1iHIh_Ab2XyKtBN2fXmowoolXzdVOmQt_MseMVG1SwYmoarzW_T1nUHOxsabN9B9rja_a7BMAPKq7diWLYuqXk-kpeJcJAdVU9tly5yEF2HYaJo';

const INTEREST_OPTIONS = [
  'Développement web sur-mesure',
  'Stratégie digitale',
  'Design UI/UX',
  'Maintenance & Support',
  'Autre',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interestedIn: '',
    projectDescription: '',
    ndaRequired: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@atlaswebdev.com';

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
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        interestedIn: '',
        projectDescription: '',
        ndaRequired: false,
      });
    } catch (err) {
      setSubmitError('Erreur de connexion. Vérifiez votre réseau et réessayez.');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact &amp; Projet | Atlas Web Development</title>
      </Head>
      <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300 min-h-screen">
        <Navbar activePage="contact" />

        <main className="relative min-h-screen geometric-bg pt-20">
          <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/2 bg-gradient-to-tr from-secondary/10 to-transparent blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-10 lg:pb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left column */}
              <div className="space-y-12">
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                    Construisons ensemble quelque chose d&apos;
                    <span className="text-primary dark:text-secondary">extraordinaire</span>.
                  </h1>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                    Prêt à faire grandir votre présence digitale ? Notre équipe est à vos côtés pour définir
                    votre stratégie et développer des solutions web performantes.
                  </p>
                </div>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center">
                      <span className="material-icons text-primary">email</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Nous contacter</h3>
                      <a
                        href={`mailto:${contactEmail}`}
                        className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary"
                      >
                        {contactEmail}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center">
                      <span className="material-icons text-primary">schedule</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Réponse rapide</h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Nous répondons généralement à toutes les demandes de projet sous{' '}
                        <span className="text-primary dark:text-secondary font-semibold">24 à 48 heures</span>
                        .
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center">
                      <span className="material-icons text-primary">location_on</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Portée mondiale</h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Basés à Valenciennes. Au service des clients dans le monde entier.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                  <p className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">
                    Reconnu par les leaders du secteur
                  </p>
                  <div className="flex flex-wrap gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {/* <img
                      alt="Partner Logo"
                      className="h-6 filter brightness-0 dark:invert"
                      src={PARTNER_LOGO_1}
                    /> */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {/* <img
                      alt="Partner Logo"
                      className="h-6 filter brightness-0 dark:invert"
                      src={PARTNER_LOGO_2}
                    /> */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {/* <img
                      alt="Partner Logo"
                      className="h-6 filter brightness-0 dark:invert"
                      src={PARTNER_LOGO_3}
                    /> */}
                  {/* </div>
                </div> */}
              </div>

              {/* Right column - Form */}
              <div
                id="form"
                className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl shadow-slate-200 dark:shadow-none border border-slate-100 dark:border-slate-800 p-8 lg:p-12 relative overflow-hidden"
              >
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
                {submitted ? (
                  <div className="relative z-10 text-center py-12">
                    <h2 className="text-2xl font-bold mb-2 text-primary dark:text-secondary">
                      Demande envoyée !
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                      Nous vous répondrons sous 24 à 48 heures. Merci.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    {submitError && (
                      <div className="rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 px-4 py-3 text-sm">
                        {submitError}
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                          htmlFor="full-name"
                        >
                          Nom complet
                        </label>
                        <input
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                          id="full-name"
                          name="fullName"
                          placeholder="Jean Dupont"
                          type="text"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                          htmlFor="email"
                        >
                          Adresse email
                        </label>
                        <input
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                          id="email"
                          name="email"
                          placeholder="jean@exemple.com"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                          htmlFor="phone"
                        >
                          Téléphone
                        </label>
                        <input
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                          id="phone"
                          name="phone"
                          placeholder="+33 6 00 00 00 00"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                          htmlFor="subject"
                        >
                          Sujet d&apos;intérêt
                        </label>
                        <select
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                          id="subject"
                          name="interestedIn"
                          value={formData.interestedIn}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Choisir une option</option>
                          {INTEREST_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                        htmlFor="project-description"
                      >
                        Description du projet
                      </label>
                      <textarea
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                        id="project-description"
                        name="projectDescription"
                        placeholder="Parlez-nous de vos objectifs, budget et délais..."
                        rows="4"
                        value={formData.projectDescription}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="flex items-center gap-2 py-2">
                      <input
                        className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary"
                        id="nda"
                        name="ndaRequired"
                        type="checkbox"
                        checked={formData.ndaRequired}
                        onChange={handleChange}
                      />
                      <label
                        className="text-sm text-slate-600 dark:text-slate-400"
                        htmlFor="nda"
                      >
                        Je souhaite signer une NDA avant de partager plus de détails.
                      </label>
                    </div>
                    <button
                      className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                      type="submit"
                      disabled={sending}
                    >
                      {sending ? (
                        <span>Envoi en cours…</span>
                      ) : (
                        <>
                          <span>Envoyer ma demande</span>
                          <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">
                            send
                          </span>
                        </>
                      )}
                    </button>
                    <p className="text-xs text-center text-slate-500 mt-4">
                      En soumettant, vous acceptez notre{' '}
                      <a className="underline hover:text-primary" href="#">
                        Politique de confidentialité
                      </a>{' '}
                      et nos{' '}
                      <a className="underline hover:text-primary" href="#">
                        Conditions d&apos;utilisation
                      </a>
                      .
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
