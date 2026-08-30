import Link from 'next/link';
import Logo from './Logo';

const CONTACT_EMAIL = 'atlaswebdev.pro@gmail.com';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/30 bg-background pt-20 pb-10">
      <p
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 select-none font-display text-[22vw] font-extrabold leading-none tracking-tighter text-ink/[0.04]"
      >
        ATLAS
      </p>
      <div className="relative z-10 mx-auto max-w-atlas px-5 md:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 mb-16">
          <div className="min-w-0">
            <Link href="/">
              <a className="inline-block mb-6">
                <Logo variant="onDark" />
              </a>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              Studio web indépendant à Valenciennes : création et refonte de
              sites internet, applications web et mobiles. Un interlocuteur unique
              qui comprend le besoin métier avant la solution technique.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-block font-label text-xs text-gold hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <div>
            <h3 className="label-caps mb-6">Services</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <Link href="/services#sites-web">
                  <a className="hover:text-gold transition-colors">Sites web</a>
                </Link>
              </li>
              <li>
                <Link href="/services#applications-web">
                  <a className="hover:text-gold transition-colors">Applications web</a>
                </Link>
              </li>
              <li>
                <Link href="/services#applications-mobiles">
                  <a className="hover:text-gold transition-colors">Applications mobiles</a>
                </Link>
              </li>
              <li>
                <Link href="/services#project-management">
                  <a className="hover:text-gold transition-colors">Pilotage de projet</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="label-caps mb-6">Studio</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <Link href="/a-propos">
                  <a className="hover:text-gold transition-colors">À propos</a>
                </Link>
              </li>
              <li>
                <Link href="/#method">
                  <a className="hover:text-gold transition-colors">Méthode</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <a className="hover:text-gold transition-colors">Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-gold transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="label-caps mb-6">Mentions</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <Link href="/mentions-legales">
                  <a className="hover:text-gold transition-colors">Mentions légales</a>
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite">
                  <a className="hover:text-gold transition-colors">Confidentialité</a>
                </Link>
              </li>
              <li>
                <Link href="/conditions-generales-utilisation">
                  <a className="hover:text-gold transition-colors">CGU</a>
                </Link>
              </li>
              <li>
                <Link href="/cookies">
                  <a className="hover:text-gold transition-colors">Cookies</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-ink/10 pt-8 text-center">
          <p className="font-label text-[10px] uppercase tracking-[0.16em] text-muted">
            © 2026 Atlas Web Development. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
