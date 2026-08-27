import Link from 'next/link';

const MANAGEMENT = [
  'Méthodologie Agile & planification de sprints',
  'Rédaction de spécifications techniques',
  'Revue d’architecture & assurance qualité',
  'Gestion des risques & allocation des ressources',
];

const ADVISORY = [
  { title: 'SEO & Performance', text: 'Audits techniques pour visibilité et vitesse de chargement.' },
  { title: 'Audit UX/UI', text: 'Évaluations heuristiques pour améliorer parcours et conversions.' },
  { title: 'Revue tech stack', text: 'Modernisation des systèmes legacy et infrastructure.' },
  { title: 'Analyse concurrentielle', text: 'Benchmark de votre présence digitale face au secteur.' },
];

export default function ServicesExtended() {
  return (
    <>
      <section id="project-management" className="border-b border-ink/10 py-20 md:py-24">
        <div className="mx-auto max-w-atlas px-5 md:px-16 grid md:grid-cols-12 gap-8">
          <p className="label-caps md:col-span-2">04 /</p>
          <div className="md:col-span-10">
            <p className="label-caps mb-3">Management</p>
            <h2 className="font-display text-headline uppercase mb-6 break-words min-w-0">
              Coordination technique de projet
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-8">
              Les projets complexes exigent plus que du code. Nous assurons la structuration et le
              pilotage technique nécessaires pour respecter les délais et maintenir la qualité.
            </p>
            <ul className="space-y-4">
              {MANAGEMENT.map((item) => (
                <li key={item} className="flex items-start gap-3 border-t border-ink/10 pt-4">
                  <span className="label-caps mt-0.5">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="strategic-support" className="border-b border-ink/10 py-20 md:py-24">
        <div className="mx-auto max-w-atlas px-5 md:px-16 grid md:grid-cols-12 gap-8">
          <p className="label-caps md:col-span-2">05 /</p>
          <div className="md:col-span-10">
            <p className="label-caps mb-3">Advisory</p>
            <h2 className="font-display text-headline uppercase mb-6 break-words min-w-0">Audit &amp; stratégie digitale</h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-10">
              Pilotez votre paysage digital en toute confiance. Identifier les freins, saisir les
              opportunités et aligner la technologie sur vos objectifs business.
            </p>
            <div className="grid sm:grid-cols-2 gap-0 border border-ink/10">
              {ADVISORY.map((card) => (
                <article
                  key={card.title}
                  className="relative p-6 border-b sm:border-r border-ink/10 sm:even:border-r-0"
                >
                  <span className="connection-dot" />
                  <h3 className="font-display text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="training" className="border-b border-ink/10 py-20 md:py-24">
        <div className="mx-auto max-w-atlas px-5 md:px-16 grid md:grid-cols-12 gap-8">
          <p className="label-caps md:col-span-2">06 /</p>
          <div className="md:col-span-10">
            <p className="label-caps mb-3">Formation</p>
            <h2 className="font-display text-headline uppercase mb-6 break-words min-w-0">Formez votre équipe</h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-8">
              Modules pour que vos équipes maîtrisent le produit web, l&apos;automatisation (n8n) et
              les bonnes pratiques associées.
            </p>
            <Link href="/contact">
              <a className="btn-ghost-gold">Demander un accès anticipé →</a>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <h2 className="font-display text-headline uppercase mb-6 break-words min-w-0">
          Prêt à faire grandir votre présence digitale ?
        </h2>
        <Link href="/contact">
          <a className="btn-gold">Réserver une consultation →</a>
        </Link>
      </section>
    </>
  );
}
