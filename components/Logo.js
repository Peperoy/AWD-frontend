export default function Logo({
  variant = 'onDark',
  showWordmark = true,
  className = '',
}) {
  const onLight = variant === 'onLight';
  const markSrc = onLight ? '/logo-mark-navy.png' : '/logo-mark.svg';
  const titleColor = onLight ? 'text-primary' : 'text-gold';
  const subColor = onLight ? 'text-primary/70' : 'text-ink';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={markSrc}
        alt=""
        className="h-11 w-11 object-contain shrink-0"
        aria-hidden
      />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className={`font-display text-xl font-bold uppercase tracking-wide ${titleColor}`}>
            Atlas
          </span>
          <span
            className={`font-label text-[7px] sm:text-[8px] font-semibold uppercase tracking-[0.12em] mt-1 ${subColor}`}
          >
            Web Development
          </span>
        </span>
      )}
    </span>
  );
}
