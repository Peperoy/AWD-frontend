const PILLARS = [
  {
    index: '01',
    title: 'Management digital',
    text: 'Comprendre les enjeux d’une organisation et d’un projet digital.',
  },
  {
    index: '02',
    title: 'Gestion de projet',
    text: 'Structurer les besoins, les priorités, les étapes et les livrables.',
  },
  {
    index: '03',
    title: 'Développement\nfull-stack',
    text: 'Passer de l’idée à une solution technique fonctionnelle.',
  },
  {
    index: '04',
    title: 'Entrepreneuriat',
    text: 'Concevoir aussi mes propres produits et comprendre les enjeux business derrière une solution digitale.',
  },
];

export default function AboutPillars() {
  return (
    <section className="bg-neutral text-primary py-24 md:py-32">
      <div className="mx-auto max-w-atlas px-5 md:px-16">
        <p className="font-label text-[12px] font-bold uppercase tracking-[0.1em] text-gold mb-6">
          Les 4 piliers
        </p>
        <h2 className="font-display text-headline uppercase mb-16 max-w-3xl text-primary break-words min-w-0">
          Un profil hybride, quatre piliers
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-primary/15">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.index}
              className="relative min-w-0 overflow-hidden p-6 md:p-8 border-b lg:border-b-0 md:border-r border-primary/15 last:border-0 md:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r"
            >
              <span className="absolute top-0 left-0 h-1 w-1 bg-gold" />
              <p className="font-label text-[12px] font-bold text-gold mb-4">{pillar.index}</p>
              <h3 className="font-display text-lg md:text-xl font-bold uppercase leading-snug break-words whitespace-pre-line mb-4">
                {pillar.title}
              </h3>
              <p className="text-primary/70 leading-relaxed">{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
