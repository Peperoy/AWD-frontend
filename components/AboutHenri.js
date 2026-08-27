import Image from 'next/image';
import Link from 'next/link';

const PILLARS = [
  {
    index: '01',
    title: 'Management Digital',
    text: 'Pilotage de projets complexes. Alignement des objectifs business avec la réalité technique pour des livrables sans compromis.',
  },
  {
    index: '02',
    title: 'Développement Full-Stack',
    text: 'Architecture robuste et code propre. De l’interface utilisateur léchée aux bases de données scalables.',
  },
  {
    index: '03',
    title: 'Esprit Entrepreneur',
    text: 'Compréhension profonde des enjeux de croissance. Chaque ligne de code est pensée pour apporter de la valeur au produit final.',
  },
];

const STACK = ['React', 'Next.js', 'Node.js'];

export default function AboutHenri() {
  return (
    <section id="about" className="bg-neutral text-primary py-24 md:py-32">
      <div className="mx-auto max-w-atlas px-5 md:px-16">
        <p className="font-label text-[12px] font-bold uppercase tracking-[0.1em] text-gold mb-6">
          Introduction
        </p>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display text-display-md uppercase text-primary">
              Derrière Atlas,
              <br />
              il y a Henri.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-primary/80 max-w-xl">
              Un mélange d’expertise technique brute et d’une vision stratégique du design. Atlas
              n’est pas juste une agence, c’est l’extension d’une volonté de construire des
              expériences numériques qui marquent les esprits.
            </p>
            <Link href="/a-propos">
              <a className="mt-8 inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.16em] text-gold hover:underline">
                Lire la suite →
              </a>
            </Link>
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
        <p className="font-label text-[12px] font-bold uppercase tracking-[0.1em] text-gold mt-20 mb-8">
          Expertise
        </p>
        <div className="grid md:grid-cols-3 gap-0 border border-primary/15">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.index}
              className="relative p-8 border-b md:border-b-0 md:border-r border-primary/15 last:border-0"
            >
              <span className="absolute top-0 left-0 h-1 w-1 bg-gold" />
              <p className="font-label text-[12px] font-bold text-gold mb-4">{pillar.index}</p>
              <h3 className="font-display text-2xl font-bold uppercase mb-4">{pillar.title}</h3>
              <p className="text-primary/70 leading-relaxed">{pillar.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-20">
          <h3 className="font-display text-headline uppercase mb-4">Stack</h3>
          <p className="text-primary/70 max-w-xl mb-8">
            Les outils de prédilection pour construire l’avenir numérique. Précision, performance et
            fiabilité.
          </p>
          <ul className="flex flex-wrap gap-0 border border-primary/15 w-fit">
            {STACK.map((tech) => (
              <li
                key={tech}
                className="font-label text-xs font-bold uppercase tracking-[0.16em] px-6 py-4 border-r border-primary/15 last:border-0"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
