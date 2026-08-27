import Link from 'next/link';

const MANAGEMENT = [
  'Clarifier le besoin, les priorités et les livrables',
  'Découper le projet en étapes compréhensibles',
  'Valider régulièrement avant d’avancer',
  'Rester l’interlocuteur unique jusqu’à la mise en ligne',
];

const ADVISORY = [
  {
    title: 'Être trouvé en ligne',
    text: 'Regarder comment votre site se présente aux moteurs de recherche et sur téléphone.',
  },
  {
    title: 'Parcours et clarté',
    text: 'Vérifier que le visiteur comprend l’offre et sait comment vous contacter.',
  },
  {
    title: 'Outil existant',
    text: 'Faire le point sur ce qui bloque aujourd’hui, sans changer pour changer.',
  },
  {
    title: 'Votre secteur',
    text: 'Comparer votre présence en ligne à ce que vos clients voient déjà ailleurs.',
  },
];

export default function ServicesExtended() {
  return (
    <>
      <section id="project-management" className="border-b border-ink/10 py-20 md:py-24">
        <div className="mx-auto max-w-atlas px-5 md:px-16 grid md:grid-cols-12 gap-8">
          <p className="label-caps md:col-span-2">04 /</p>
          <div className="md:col-span-10">
            <p className="label-caps mb-3">Pilotage</p>
            <h2 className="font-display text-headline uppercase mb-6 break-words min-w-0">
              Un projet cadré, pas seulement du code
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-8">
              Structurer le besoin, les étapes et les livrables — pour avancer clairement, avec un
              seul interlocuteur.
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
            <p className="label-caps mb-3">Accompagnement</p>
            <h2 className="font-display text-headline uppercase mb-6 break-words min-w-0">
              Faire le point avant de construire
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-10">
              Identifier ce qui manque, ce qui bloque, et ce qui vaut vraiment la peine d’être
              développé — sans jargon.
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
            <p className="label-caps mb-3">Prise en main</p>
            <h2 className="font-display text-headline uppercase mb-6 break-words min-w-0">
              Transmettre pour que ça vive sans vous
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-8">
              Expliquer le site ou l’outil à vos équipes, pour qu’elles puissent le faire vivre au
              quotidien.
            </p>
            <Link href="/contact">
              <a className="btn-ghost-gold">En parler →</a>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <h2 className="font-display text-headline uppercase mb-6 break-words min-w-0">
          Un projet à poser ?
        </h2>
        <Link href="/contact">
          <a className="btn-gold">Parler de votre projet →</a>
        </Link>
      </section>
    </>
  );
}
