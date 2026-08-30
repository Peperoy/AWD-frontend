import Link from 'next/link';

export default function Hero() {
  return (
    <header id="hero" className="relative isolate overflow-hidden min-h-[88vh] flex flex-col justify-center max-w-full">
      <div className="atlas-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-atlas min-w-0 px-5 md:px-16 py-20 md:py-28">
        <h1 className="font-display text-display-lg uppercase text-ink w-full max-w-full break-words min-w-0">
          Votre
          <br className="md:hidden" />{' '}
          <span className="text-gold">idée</span>.
          <br />
          Notre
          <br className="md:hidden" />{' '}
          <span className="text-gold">
            terrain
            <br className="md:hidden" /> de jeu
          </span>
          .
        </h1>
        <span className="gold-rule mt-8" aria-hidden />
        <p className="lead-wrap mt-8 text-lg md:text-xl text-muted leading-relaxed">
          Création ou refonte de sites internet, applications web et mobiles. Un seul
          interlocuteur, du besoin jusqu’à la mise en ligne.
        </p>
        <Link href="/contact">
          <a className="mt-10 inline-flex max-w-full flex-wrap items-center gap-3 font-label text-[11px] font-bold uppercase tracking-[0.12em] text-ink hover:text-gold transition-colors">
            Parler de votre projet
            <span aria-hidden>→</span>
          </a>
        </Link>
      </div>
    </header>
  );
}
