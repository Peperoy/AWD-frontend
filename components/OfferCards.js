import Link from 'next/link';
import { PACKS, devisHref, formatPackRange } from '../data/offers';

export default function OfferCards() {
  return (
    <section id="offres" className="scroll-mt-24 border-b border-ink/10 py-20 md:py-24">
      <div className="mx-auto max-w-atlas px-5 md:px-16">
        <p className="label-caps mb-3">Offres</p>
        <span className="gold-rule mb-8" aria-hidden />
        <h2 className="font-display text-headline uppercase mb-4 break-words min-w-0 max-w-3xl">
          Cinq packs, un devis qui précise
        </h2>
        <p className="text-muted text-lg leading-relaxed max-w-2xl mb-12">
          Prix de départ HT. Options et complexité se règlent au devis — pas un tarif unique.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PACKS.map((pack) => (
            <li key={pack.id} className="card-sharp h-full">
              <article className="relative h-full p-6 md:p-8 flex flex-col">
                <span className="connection-dot" />
                <p className="label-caps mb-3">{pack.index} /</p>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-3">
                  {pack.title}
                </h3>
                <p className="font-label text-[11px] font-bold uppercase tracking-[0.14em] text-gold border border-gold/60 px-3 py-2 w-fit mb-4">
                  {formatPackRange(pack)}
                </p>
                <p className="text-sm text-muted leading-relaxed mb-6">{pack.summary}</p>
                <ul className="space-y-2 mb-6">
                  {pack.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="h-1 w-1 bg-gold shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                {pack.extras?.length > 0 && (
                  <div className="mb-6">
                    <p className="label-caps mb-3">Options</p>
                    <ul className="space-y-3">
                      {pack.extras.map((extra) => (
                        <li key={extra.label} className="text-sm">
                          <p>{extra.label}</p>
                          <p className="text-gold text-xs mt-0.5">{extra.price}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <p className="text-xs text-muted mb-4 mt-auto">{pack.footnote}</p>
                <Link href={devisHref(pack.id)}>
                  <a className="btn-ghost-gold w-full">Demander un devis →</a>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
