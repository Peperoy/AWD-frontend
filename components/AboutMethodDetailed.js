const STEPS = [
  {
    index: '01',
    title: 'Comprendre',
    text: 'Avant de développer, comprendre le besoin, le problème, les utilisateurs, les objectifs et les contraintes du projet.',
    items: ['Besoin', 'Problème', 'Utilisateurs', 'Objectifs', 'Contraintes'],
  },
  {
    index: '02',
    title: 'Concevoir',
    text: 'Définir l’architecture, les fonctionnalités, les parcours, l’expérience utilisateur et l’interface.',
    items: ['Architecture', 'Fonctionnalités', 'Parcours', 'UX', 'Interface'],
  },
  {
    index: '03',
    title: 'Développer',
    text: 'Construire le frontend, le backend, la base de données, les APIs et les intégrations — par étapes, avec des validations régulières.',
    items: ['Frontend', 'Backend', 'Base de données', 'APIs', 'Intégrations'],
  },
  {
    index: '04',
    title: 'Améliorer',
    text: 'Après la mise en ligne : vérifier, corriger, optimiser et faire évoluer le produit.',
    items: ['Vérifier', 'Corriger', 'Optimiser', 'Faire évoluer'],
  },
];

export default function AboutMethodDetailed() {
  return (
    <section id="method" className="relative isolate overflow-hidden py-24 md:py-32">
      <div className="atlas-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-atlas px-5 md:px-16">
        <p className="label-caps mb-3">Méthode</p>
        <span className="gold-rule mb-8" aria-hidden />
        <h2 className="font-display text-headline uppercase mb-6 max-w-3xl break-words min-w-0">
          Quatre étapes, du besoin au produit
        </h2>
        <p className="text-muted max-w-xl mb-16 leading-relaxed">
          La même méthode pour un site vitrine, une application web ou un produit : partir du
          besoin métier, puis avancer par étapes validées.
        </p>
        <ol>
          {STEPS.map((step) => (
            <li
              key={step.index}
              className="grid md:grid-cols-12 gap-4 md:gap-8 border-t border-ink/10 py-10 last:border-b"
            >
              <span className="label-caps md:col-span-2">{step.index}</span>
              <h3 className="font-display text-2xl font-bold uppercase md:col-span-3">
                {step.title}
              </h3>
              <div className="md:col-span-7">
                <p className="text-muted leading-relaxed">{step.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="font-label text-[11px] font-bold uppercase tracking-[0.16em] text-gold border border-gold/40 px-3 py-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
