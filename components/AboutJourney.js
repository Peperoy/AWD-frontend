const PHASES = [
  {
    index: '01',
    title: 'Comprendre les organisations',
    text: 'BTS Gestion de PME, Licence en Management des Organisations et expérience professionnelle : management, gestion et organisation.',
  },
  {
    index: '02',
    title: 'Comprendre le digital',
    text: 'Master en Management Digital et Projet Entrepreneurial (MDPE) et développement d’une culture produit et digitale.',
  },
  {
    index: '03',
    title: 'Construire les solutions',
    text: 'Formation intensive en développement web full-stack — notamment sur l’écosystème MERN — puis création d’Atlas Web Development.',
  },
];

export default function AboutJourney() {
  return (
    <section className="border-b border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-atlas px-5 md:px-16">
        <p className="label-caps mb-6">Parcours</p>
        <h2 className="font-display text-headline uppercase mb-16 max-w-3xl break-words min-w-0">
          Trois phases, une même logique
        </h2>
        <ol className="grid md:grid-cols-3 gap-0 border border-ink/10">
          {PHASES.map((phase) => (
            <li
              key={phase.index}
              className="relative p-8 md:p-10 border-b md:border-b-0 md:border-r border-ink/10 last:border-0"
            >
              <span className="connection-dot" />
              <p className="font-label text-[12px] font-bold text-gold mb-4">{phase.index}</p>
              <h3 className="font-display text-2xl font-bold uppercase mb-4">{phase.title}</h3>
              <p className="text-muted leading-relaxed">{phase.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-12 max-w-2xl font-display text-2xl md:text-3xl font-bold uppercase leading-snug">
          Mon parcours m’a amené à comprendre les projets
          <span className="text-gold"> avant d’apprendre à les construire techniquement.</span>
        </p>
      </div>
    </section>
  );
}
