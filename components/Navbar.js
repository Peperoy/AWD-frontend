import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLink = (isActive) =>
  `text-sm font-medium hover:text-primary-services transition-colors ${isActive ? 'font-semibold text-primary-services border-b-2 border-primary-services pb-1' : ''}`;

export default function Navbar({ activePage = null }) {
  const [activeSection, setActiveSection] = useState(null);

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
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-background-darker/80">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Logo-bg.png" alt="Atlas" className="h-10 w-auto object-contain" />
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
        <button className="md:hidden p-2 text-slate-600 dark:text-slate-300">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}
