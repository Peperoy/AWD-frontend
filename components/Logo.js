import Image from 'next/image';

export default function Logo({
  variant = 'onDark',
  showWordmark = true,
  className = '',
}) {
  const titleColor = variant === 'onLight' ? 'text-primary' : 'text-ink';
  const subColor = variant === 'onLight' ? 'text-primary/70' : 'text-muted';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative h-11 w-[56px] shrink-0">
        <Image
          src="/Logo-bg.webp"
          alt=""
          layout="fill"
          objectFit="contain"
          priority
        />
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className={`font-display text-xl font-extrabold tracking-tight ${titleColor}`}>
            Atlas
          </span>
          <span
            className={`font-label text-[9px] font-bold uppercase tracking-[0.18em] mt-1 ${subColor}`}
          >
            Web Development
          </span>
        </span>
      )}
    </span>
  );
}
