import Image from 'next/image';

const SCOPE = [
  'Site vitrine',
  'Refonte',
  'Application web',
  'Application mobile',
  'Outil métier',
  'Produit SaaS',
  'Fonctionnalités & intégrations',
];

export default function AboutIntro() {
  return (
    <>
      <header className="relative isolate overflow-hidden border-b border-ink/10 py-20 md:py-28">
        <div className="atlas-glow pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-atlas px-5 md:px-16">
          <p className="label-caps mb-6">À propos</p>
          <h1 className="font-display text-display-md uppercase max-w-4xl">
            Un studio indépendant,
            <br />
            un interlocuteur unique
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink leading-relaxed">
            Mon avantage ? Comprendre aussi bien le problème
            <br className="hidden md:block" /> que la technologie qui permet de le résoudre.
          </p>
        </div>
      </header>
      <section className="bg-neutral text-primary py-24 md:py-32">
        <div className="mx-auto max-w-atlas px-5 md:px-16">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <p className="font-label text-[12px] font-bold uppercase tracking-[0.1em] text-gold mb-6">
                Le profil
              </p>
              <h2 className="font-display text-display-md uppercase text-primary">
                Derrière Atlas,
                <br />
                Henri De Boever.
              </h2>
              <div className="mt-8 space-y-4 text-primary/80 max-w-xl leading-relaxed text-lg">
                <p>
                  Atlas Web Development est mon activité indépendante de développement web et
                  digital. Mon profil est volontairement hybride : je ne suis pas uniquement
                  développeur, et je ne suis pas uniquement chef de projet. Je combine management,
                  gestion de projet, entrepreneuriat, développement web full-stack et conception de
                  produits digitaux.
                </p>
                <p>
                  Mon parcours en management, gestion de projet et entrepreneuriat m’a appris à
                  regarder un projet dans son ensemble. Ma spécialisation en développement web m’a
                  ensuite donné les compétences techniques nécessaires pour transformer cette
                  compréhension en solutions concrètes.
                </p>
                <p>
                  Mon objectif avec Atlas : accompagner des entreprises, indépendants et porteurs de
                  projets dans la conception et le développement de solutions digitales adaptées à
                  leurs besoins — avec un seul interlocuteur, du cadrage à la réalisation technique.
                </p>
                <p className="font-label text-xs font-bold uppercase tracking-[0.16em] text-gold pt-2">
                  Comprendre le besoin métier avant de penser à la solution technique.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full max-w-sm lg:ml-auto border border-primary/15 overflow-hidden">
                <Image
                  alt="Henri De Boever"
                  src="/IMG_4270.webp"
                  layout="fill"
                  className="object-cover grayscale"
                  sizes="(max-width: 1024px) 100vw, 28rem"
                />
              </div>
            </div>
          </div>
          <div className="mt-20">
            <p className="font-label text-[12px] font-bold uppercase tracking-[0.1em] text-gold mb-6">
              Terrains d’intervention
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-primary/15">
              {SCOPE.map((item, i) => (
                <li
                  key={item}
                  className={`relative font-label text-xs font-bold uppercase tracking-[0.16em] px-5 py-5 border-b border-r border-primary/15 ${
                    i === SCOPE.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <span className="absolute top-0 left-0 h-1 w-1 bg-gold" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
