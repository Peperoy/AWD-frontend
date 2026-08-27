const STEPS = [
  {
    index: '01',
    title: 'Analyse & Stratégie',
    text: 'Immersion dans votre métier pour comprendre vos enjeux et définir les indicateurs clés de succès (KPIs).',
  },
  {
    index: '02',
    title: 'Conception & Prototypage',
    text: 'Création des parcours utilisateurs et des maquettes haute fidélité pour une expérience fluide et moderne.',
  },
  {
    index: '03',
    title: 'Développement Agile',
    text: 'Codage itératif avec des points de suivi réguliers pour ajuster les fonctionnalités en temps réel.',
  },
  {
    index: '04',
    title: 'Déploiement & Optimisation',
    text: 'Lancement officiel suivi d’une phase d’analyse de données pour maximiser vos conversions.',
  },
];

export default function Process() {
  return (
    <section id="method" className="border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-atlas px-5 md:px-16">
        <p className="label-caps mb-6">Process</p>
        <h2 className="font-display text-headline uppercase mb-16 max-w-3xl">
          Notre méthode de travail
        </h2>
        <ol>
          {STEPS.map((step) => (
            <li
              key={step.index}
              className="grid md:grid-cols-12 gap-4 md:gap-8 border-t border-ink/10 py-8 last:border-b"
            >
              <span className="label-caps md:col-span-2">{step.index}</span>
              <h3 className="font-display text-2xl font-bold uppercase md:col-span-4">{step.title}</h3>
              <p className="text-muted leading-relaxed md:col-span-6">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
