import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '../data/projects';

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-atlas px-5 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="label-caps mb-3">Sélection de projets</p>
            <span className="gold-rule mb-4" aria-hidden />
            <h2 className="font-display text-display-md uppercase break-words min-w-0">
              Des projets
              <br />
              qui prennent vie
            </h2>
          </div>
          <Link href="/portfolio">
            <a className="label-caps text-ink hover:text-gold transition-colors">
              Voir tout le portfolio →
            </a>
          </Link>
        </div>
        <ul className="space-y-0">
          {PROJECTS.filter((project) => project.featured).map((project) => (
            <li key={project.title} className="border-t border-ink/10 last:border-b">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid md:grid-cols-2 gap-8 py-10 md:py-14 items-center"
              >
                <div className="card-sharp overflow-hidden">
                  <span className="connection-dot" />
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      layout="fill"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div>
                  <p className="label-caps mb-3">
                    {project.index} / {project.category}
                  </p>
                  <h3 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-muted max-w-md leading-relaxed">{project.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.16em] text-gold">
                    Voir le site
                    <span className="material-symbols-outlined text-base">north_east</span>
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
