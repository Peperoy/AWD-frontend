import Link from 'next/link';

const ITEMS = [
  {
    index: '01',
    title: 'Sites web',
    benefit: 'Être trouvable, clair, et facile à contacter.',
    href: '/services#sites-web',
  },
  {
    index: '02',
    title: 'Applications web',
    benefit: 'Un outil pour votre activité, pas un logiciel générique.',
    href: '/services#applications-web',
  },
  {
    index: '03',
    title: 'Applications mobiles',
    benefit: 'Une app que vos clients ou vos équipes ont dans la poche.',
    href: '/services#applications-mobiles',
  },
];

export default function Expertise() {
  return (
    <section id="services" className="border-t border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-atlas px-5 md:px-16">
        <p className="label-caps mb-12">Ce que je peux faire</p>
        <ul>
          {ITEMS.map((item) => (
            <li key={item.index} className="border-t border-ink/10 last:border-b">
              <Link href={item.href}>
                <a className="group flex items-center justify-between gap-6 py-8 md:py-10">
                  <span className="flex items-start gap-6 md:gap-12 min-w-0">
                    <span className="label-caps shrink-0 mt-2">{item.index} /</span>
                    <span className="min-w-0">
                      <span className="block font-display text-headline uppercase tracking-tight break-words group-hover:text-gold transition-colors">
                        {item.title}
                      </span>
                      <span className="mt-2 block text-base text-muted font-body normal-case tracking-normal">
                        {item.benefit}
                      </span>
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
