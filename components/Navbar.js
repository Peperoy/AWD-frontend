import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const linkClass = (isActive) =>
  `font-label text-[11px] font-bold uppercase tracking-[0.16em] transition-colors ${
    isActive ? 'text-gold' : 'text-ink/70 hover:text-ink'
  }`;

const LINKS = [
  { href: '/', label: 'Accueil', id: 'home' },
  { href: '/services', label: 'Services', id: 'services' },
  { href: '/portfolio', label: 'Portfolio', id: 'portfolio' },
  { href: '/a-propos', label: 'À propos', id: 'about' },
];

export default function Navbar({ activePage = null }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gold/25 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-atlas items-center justify-between px-5 md:px-16">
          <Link href="/">
            <a className="group" aria-label="Atlas Web Development — accueil">
              <Logo variant="onDark" />
            </a>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((item) => (
              <Link key={item.id} href={item.href}>
                <a className={linkClass(activePage === item.id)}>{item.label}</a>
              </Link>
            ))}
            <Link href="/contact">
              <a className="btn-ghost-gold">Contact</a>
            </Link>
          </nav>
          <button
            type="button"
            className="p-2 text-ink md:hidden -mr-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span className="material-symbols-outlined text-3xl">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-background atlas-grid md:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex h-full flex-col justify-center px-8 gap-2">
          {[...LINKS, { href: '/contact', label: 'Contact', id: 'contact' }].map((item) => (
            <Link key={item.id} href={item.href}>
              <a
                className="font-display text-4xl font-extrabold uppercase tracking-tight text-ink hover:line-through hover:text-gold transition-colors py-2"
                onClick={close}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </nav>
      </div>

      <div className="h-20" aria-hidden />
    </>
  );
}
