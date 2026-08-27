export default function Hero() {
  return (
    <header id="hero" className="relative isolate overflow-hidden min-h-[88vh] flex items-center">
      <div className="atlas-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-atlas px-5 md:px-16 py-20 md:py-28">
        <h1 className="font-display text-display-lg uppercase text-ink max-w-[18ch]">
          Votre <span className="text-gold">idée</span>.
          <br />
          Notre <span className="text-gold">terrain de jeu</span>.
        </h1>
        <p className="mt-8 max-w-xl text-lg md:text-xl text-muted leading-relaxed">
          Des sites web et produits digitaux conçus pour aller plus loin. Nous fusionnons
          esthétique éditoriale et ingénierie de précision.
        </p>
        <a href="#method" className="mt-10 inline-flex items-center gap-3 font-label text-xs font-bold uppercase tracking-[0.16em] text-ink hover:text-gold transition-colors">
          Découvrir le Process
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
