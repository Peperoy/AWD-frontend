import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLink = (isActive) =>
  `text-sm font-medium hover:text-primary-services transition-colors ${isActive ? 'font-semibold text-primary-services border-b-2 border-primary-services pb-1' : ''}`;

export default function Navbar({ activePage = null }) {
  const [activeSection, setActiveSection] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    if (activePage !== 'home') return;
    const hero = document.getElementById('hero');
    const portfolio = document.getElementById('portfolio');
    const about = document.getElementById('about');
    if (!hero || !portfolio || !about) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          if (id === 'hero') setActiveSection(null);
          if (id === 'portfolio') setActiveSection('portfolio');
          if (id === 'about') setActiveSection('about');
        });
      },
      { rootMargin: '-100px 0px -50% 0px', threshold: 0 }
    );

    observer.observe(hero);
    observer.observe(portfolio);
    observer.observe(about);
    return () => observer.disconnect();
  }, [activePage]);

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-background-darker/95">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <Image src="/Logo-bg.webp" alt="Atlas" width={120} height={40} className="h-10 w-auto object-contain" />
            <div className="flex flex-col -space-y-0.5">
              <span className="font-futuristic italic text-xl font-bold tracking-wide text-primary-services">
                Atlas
              </span>
              <span className="font-futuristic italic text-[10px] font-medium tracking-[0.15em] text-slate-500 dark:text-slate-400">
                Web Development
              </span>
            </div>
          </a>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/">
            <a className={navLink(activePage === 'home' && activeSection === null)}>Accueil</a>
          </Link>
          <Link href="/services">
            <a className={navLink(activePage === 'services')}>Services</a>
          </Link>
          <Link href="/#portfolio">
            <a className={navLink(activePage === 'home' && activeSection === 'portfolio')}>Portfolio</a>
          </Link>
          <Link href="/#about">
            <a className={navLink(activePage === 'home' && activeSection === 'about')}>À propos</a>
          </Link>
          <Link href="/contact">
            <a className="px-5 py-2.5 bg-primary-services text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-primary-services/30 transition-all active:scale-95">
              Nous contacter
            </a>
          </Link>
        </nav>
        <button
          type="button"
          className="md:hidden p-2 text-slate-600 dark:text-slate-300 -mr-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span className="material-symbols-outlined text-3xl">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>
    </header>

    {/* Mobile menu overlay */}
    <div
      className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      style={{ top: '80px' }}
    >
      <div
        className="absolute inset-0 bg-slate-900/50 dark:bg-slate-950/50 backdrop-blur-sm"
        onClick={() => setMenuOpen(false)}
        aria-hidden
      />
      <nav
        className={`absolute left-0 right-0 top-0 bg-white dark:bg-background-darker border-b border-slate-200 dark:border-slate-800 shadow-xl transition-transform duration-300 ${
          menuOpen ? 'translate-y-0' : '-translate-y-4'
        }`}
      >
        <div className="flex flex-col p-6 gap-1">
          <Link href="/">
            <a
              className={navLink(activePage === 'home' && activeSection === null) + ' py-4 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 block'}
              onClick={() => setMenuOpen(false)}
            >
              Accueil
            </a>
          </Link>
          <Link href="/services">
            <a
              className={navLink(activePage === 'services') + ' py-4 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 block'}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
          </Link>
          <Link href="/#portfolio">
            <a
              className={navLink(activePage === 'home' && activeSection === 'portfolio') + ' py-4 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 block'}
              onClick={() => setMenuOpen(false)}
            >
              Portfolio
            </a>
          </Link>
          <Link href="/#about">
            <a
              className={navLink(activePage === 'home' && activeSection === 'about') + ' py-4 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 block'}
              onClick={() => setMenuOpen(false)}
            >
              À propos
            </a>
          </Link>
          <Link href="/contact">
            <a
              className="mt-2 py-4 px-4 rounded-lg bg-primary-services text-white text-center font-bold block hover:bg-primary-services/90"
              onClick={() => setMenuOpen(false)}
            >
              Nous contacter
            </a>
          </Link>
        </div>
      </nav>
    </div>

    {/* Spacer for fixed navbar */}
    <div className="h-20" aria-hidden />
    </>
  );
}
