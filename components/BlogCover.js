const PILLARS = {
  'Sites web': 'Site',
  'Applications web': 'App web',
  'Applications mobiles': 'Mobile',
};

export function formatBlogIndex(n) {
  const value = Number(n);
  if (!value || value < 1) {
    return '01';
  }
  return String(value).padStart(2, '0');
}

export default function BlogCover({ pillar, index = 1, wide = false }) {
  const short = PILLARS[pillar] || pillar || 'Article';
  const label = formatBlogIndex(index);
  const ratio = wide ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[16/10]';

  return (
    <div className="card-sharp overflow-hidden h-full">
      <span className="connection-dot" />
      <div
        className={`relative ${ratio} min-h-[14rem] flex flex-col justify-end p-6 md:p-8 overflow-hidden`}
      >
        <div className="atlas-glow pointer-events-none absolute inset-0" aria-hidden />
        <span
          className="pointer-events-none absolute -top-6 right-0 font-display text-[7rem] md:text-[11rem] font-extrabold leading-none text-ink/[0.07] select-none"
          aria-hidden
        >
          {label}
        </span>
        <p className="relative label-caps mb-3">{label} /</p>
        <p className="relative font-display text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-ink">
          {short}
        </p>
        <p className="relative mt-3 font-label text-[11px] font-bold uppercase tracking-[0.16em] text-gold border border-gold/60 px-4 py-2 w-fit">
          {pillar || 'Article'}
        </p>
      </div>
    </div>
  );
}
