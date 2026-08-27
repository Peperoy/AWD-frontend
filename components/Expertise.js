import Link from 'next/link';

const ITEMS = [
  { index: '01', title: 'Sites web', href: '/services#sites-web' },
  { index: '02', title: 'Applications web', href: '/services#applications-web' },
  { index: '03', title: 'Applications mobiles', href: '/services#applications-mobiles' },
];

export default function Expertise() {
  return (
    <section id="services" className="border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-atlas px-5 md:px-16">
        <p className="label-caps mb-12">/ Notre Expertise</p>
        <ul>
          {ITEMS.map((item) => (
            <li key={item.index} className="border-t border-ink/10 last:border-b">
              <Link href={item.href}>
                <a className="group flex items-center justify-between gap-6 py-8 md:py-10">
                  <span className="flex items-baseline gap-6 md:gap-12 min-w-0">
                    <span className="label-caps shrink-0">{item.index} /</span>
                    <span className="font-display text-headline uppercase tracking-tight group-hover:text-gold transition-colors">
                      {item.title}
                    </span>
                  </span>
                  <span className="material-symbols-outlined text-gold text-3xl shrink-0 group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
