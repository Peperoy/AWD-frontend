const STEPS = [
  {
    index: '01',
    title: 'Comprendre',
    text: 'Le besoin, le problème, les utilisateurs et les contraintes — avant de parler d’outil.',
  },
  {
    index: '02',
    title: 'Concevoir',
    text: 'Ce que le site ou l’application doit faire, dans quel ordre, et comment on s’y retrouve.',
  },
  {
    index: '03',
    title: 'Développer',
    text: 'Construire par étapes, avec des points de validation réguliers, jusqu’à la mise en ligne.',
  },
  {
    index: '04',
    title: 'Améliorer',
    text: 'Vérifier, corriger, et faire évoluer le produit une fois qu’il est entre vos mains.',
  },
];

export default function Process() {
  return (
    <section id="method" className="border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-atlas px-5 md:px-16">
        <p className="label-caps mb-3">Méthode</p>
        <span className="gold-rule mb-8" aria-hidden />
        <h2 className="font-display text-headline uppercase mb-16 max-w-3xl break-words min-w-0">
          Comment on travaille
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
