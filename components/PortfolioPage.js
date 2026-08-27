import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import ProjectCta from './ProjectCta';
import { PROJECTS } from '../data/projects';

function CaseVisual({ project }) {
  if (project.image) {
    return (
      <div className="card-sharp overflow-hidden">
        <span className="connection-dot" />
        <div className="relative aspect-[16/10]">
          <Image
            src={project.image}
            alt={project.alt}
            layout="fill"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="card-sharp overflow-hidden">
      <span className="connection-dot" />
      <div className="relative aspect-[16/10] atlas-grid flex flex-col items-center justify-center gap-5 px-6">
        <div className="atlas-glow pointer-events-none absolute inset-0" aria-hidden />
        <p className="relative font-display text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-ink text-center">
          {project.title}
        </p>
        <p className="relative font-label text-[11px] font-bold uppercase tracking-[0.16em] text-gold border border-gold/60 px-4 py-2 text-center">
          {project.type}
        </p>
      </div>
    </div>
  );
}

function CaseStudy({ project, reversed }) {
  return (
    <li className="border-b border-ink/10">
      <article className="relative mx-auto max-w-atlas px-5 md:px-16 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-start overflow-hidden">
        <span
          className="pointer-events-none absolute -top-6 right-4 font-display text-[10rem] md:text-[16rem] font-extrabold leading-none text-ink/5 select-none"
          aria-hidden
        >
          {project.index}
        </span>
        <div className={`relative md:sticky md:top-28 ${reversed ? 'md:order-2' : ''}`}>
          <CaseVisual project={project} />
        </div>
        <div className="relative">
          <p className="label-caps mb-3">
            {project.index} / {project.sector}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            {project.title}
          </h2>
          <p className="mt-3 font-label text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
            {project.caseCategory}
            {project.type !== 'Réalisation' && (
              <span className="text-gold"> · {project.type}</span>
            )}
          </p>
          <dl className="mt-8 space-y-6 border-t border-ink/10 pt-6">
            <div>
              <dt className="label-caps mb-2">Contexte</dt>
              <dd className="text-muted leading-relaxed">{project.context}</dd>
            </div>
            <div>
              <dt className="label-caps mb-2">Mission</dt>
              <dd className="text-muted leading-relaxed">{project.mission}</dd>
            </div>
            <div>
              <dt className="label-caps mb-2">Livrables</dt>
              <dd>
                <ul className="space-y-2">
                  {project.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink">
                      <span className="mt-[7px] h-1 w-1 shrink-0 bg-gold" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            {project.stack.length > 0 && (
              <div>
                <dt className="label-caps mb-3">Technologies</dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="font-label text-[11px] font-bold uppercase tracking-[0.16em] text-ink border border-ink/20 px-3 py-2"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            )}
          </dl>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.16em] text-gold hover:underline"
            >
              Voir le projet
              <span className="material-symbols-outlined text-base">north_east</span>
            </a>
          )}
        </div>
      </article>
    </li>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Portfolio | Atlas Web Development</title>
        <meta
          name="description"
          content="Études de cas Atlas : The White Shop, Ho Lamian, Terrasses & Paysages, Pokerz, FinExtHub. Contexte, mission, livrables et technologies, projet par projet."
        />
      </Head>
      <div className="font-body bg-background text-ink antialiased atlas-grid min-h-screen">
        <Navbar activePage="portfolio" />
        <main>
          <header className="relative isolate overflow-hidden border-b border-ink/10 py-20 md:py-28">
            <div className="atlas-glow pointer-events-none absolute inset-0" aria-hidden />
            <div className="relative mx-auto max-w-atlas px-5 md:px-16">
              <p className="label-caps mb-6">Portfolio / Études de cas</p>
              <h1 className="font-display text-display-md uppercase max-w-4xl">
                Des projets,
                <br />
                pas seulement des sites
              </h1>
              <p className="mt-8 max-w-xl text-lg text-muted leading-relaxed">
                Réalisations professionnelles et produits conçus en propre. Chaque projet est
                présenté comme une mini étude de cas : le contexte, la mission, ce qui a été
                construit et les technologies réellement utilisées.
              </p>
            </div>
          </header>
          <ul>
            {PROJECTS.map((project, i) => (
              <CaseStudy key={project.title} project={project} reversed={i % 2 === 1} />
            ))}
          </ul>
          <section className="border-b border-ink/10 py-20 md:py-28">
            <div className="mx-auto max-w-atlas px-5 md:px-16 grid md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-8">
                <p className="label-caps mb-4">Méthode</p>
                <h2 className="font-display text-headline uppercase max-w-2xl">
                  Derrière chaque projet, la même façon de travailler
                </h2>
                <p className="mt-6 max-w-xl text-muted leading-relaxed">
                  Comprendre le besoin, concevoir la solution, la développer par étapes, puis
                  l’améliorer. La méthode complète est détaillée sur la page À propos.
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Link href="/a-propos#method">
                  <a className="btn-ghost-gold">
                    Découvrir la méthode
                    <span aria-hidden>→</span>
                  </a>
                </Link>
              </div>
            </div>
          </section>
          <ProjectCta />
        </main>
        <Footer />
      </div>
    </>
  );
}
