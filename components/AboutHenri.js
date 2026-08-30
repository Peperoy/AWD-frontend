import Image from 'next/image';
import Link from 'next/link';

const PILLARS = [
  {
    index: '01',
    title: 'Comprendre le métier',
    text: 'Regarder le projet dans son ensemble : votre activité, vos priorités, ce qui doit vraiment avancer.',
  },
  {
    index: '02',
    title: 'Construire la solution',
    text: 'Passer de l’idée à un site ou une application qui fonctionne, avec un interlocuteur unique.',
  },
  {
    index: '03',
    title: 'Penser comme un porteur de projet',
    text: 'Avoir aussi conçu ses propres produits : comprendre les enjeux business derrière un outil digital.',
  },
];

export default function AboutHenri() {
  return (
    <section id="about" className="bg-neutral text-primary py-24 md:py-32">
      <div className="mx-auto max-w-atlas px-5 md:px-16">
        <p className="font-label text-[12px] font-bold uppercase tracking-[0.1em] text-gold mb-3">
          Introduction
        </p>
        <span className="gold-rule mb-6" aria-hidden />
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 min-w-0">
            <h2 className="font-display text-display-md uppercase text-primary break-words min-w-0">
              Derrière Atlas,
              <br />
              il y a Henri.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-primary/80 max-w-xl">
              Un studio indépendant, un interlocuteur unique. Henri n’est pas seulement
              développeur : il part de votre besoin métier, structure le projet, et le réalise.
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
                priority
                sizes="(max-width: 1024px) 100vw, 28rem"
              />
            </div>
          </div>
        </div>
        <p className="font-label text-[12px] font-bold uppercase tracking-[0.1em] text-gold mt-20 mb-8">
          Ce que ça change pour vous
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
      </div>
    </section>
  );
}
