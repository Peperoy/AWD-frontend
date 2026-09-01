import Link from 'next/link';
import { TEASER_PACKS, getPackById, devisHref, formatPackRange } from '../data/offers';

export default function OffersTeaser() {
  return (
    <section id="offres" className="border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-atlas px-5 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="label-caps mb-3">Offres</p>
            <span className="gold-rule mb-6" aria-hidden />
            <h2 className="font-display text-headline uppercase break-words min-w-0 max-w-2xl">
              Un départ, puis un devis
            </h2>
          </div>
          <Link href="/services#offres">
            <a className="label-caps text-ink hover:text-gold transition-colors">
              Voir les 5 packs →
            </a>
          </Link>
        </div>
        <ul className="grid md:grid-cols-3 border-t border-l border-ink/15">
          {TEASER_PACKS.map((pack) => (
            <li key={pack.id} className="relative border-b border-r border-ink/15 p-6 md:p-8">
              <span className="connection-dot" />
              <p className="label-caps mb-3">{pack.index} /</p>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-3">
                {pack.title}
              </h3>
              <p className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-gold mb-2">
                {formatPackRange(pack)}
              </p>
              {pack.teaserNote && (
                <p className="text-xs text-muted mb-4">{pack.teaserNote}</p>
              )}
              <p className="text-sm text-muted leading-relaxed mb-6">{pack.summary}</p>
              <Link href={devisHref(pack.id)}>
                <a className="font-label text-[11px] font-bold uppercase tracking-[0.12em] text-ink hover:text-gold transition-colors">
                  Devis {pack.title.toLowerCase()} →
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted">
          {getPackById('audit').title} ({formatPackRange(getPackById('audit'))}) et{' '}
          {getPackById('suivi').title.toLowerCase()} ({formatPackRange(getPackById('suivi'))}) :{' '}
          <Link href="/services#offres">
            <a className="text-gold hover:underline">détail des packs</a>
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
