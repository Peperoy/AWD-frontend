import Link from 'next/link';

export default function ProjectCta() {
  return (
    <section id="contact" className="relative isolate overflow-hidden border-t border-ink/10 py-28 md:py-36">
      <div className="atlas-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-atlas px-5 md:px-16 text-center">
        <h2 className="font-display text-display-md uppercase break-words min-w-0">
          Et si le prochain
          <br />
          produit était
          <br className="md:hidden" /> le vôtre ?
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact?tab=devis">
            <a className="btn-gold">
              Demander un devis
              <span aria-hidden>→</span>
            </a>
          </Link>
          <Link href="/contact#rdv">
            <a className="btn-ghost-gold">
              Prendre rendez-vous
              <span aria-hidden>→</span>
            </a>
          </Link>
        </div>
        <ul className="mt-16 flex flex-wrap justify-center gap-8 font-label text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
          <li>Site web</li>
          <li className="text-gold">·</li>
          <li>Application</li>
          <li className="text-gold">·</li>
          <li>Un interlocuteur</li>
        </ul>
      </div>
    </section>
  );
}
