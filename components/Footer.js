import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-surface-dark pt-20 pb-10 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/">
              <a className="flex items-center gap-2 mb-6">
                <Image src="/Logo-bg.webp" alt="Atlas" width={96} height={32} className="h-8 w-auto object-contain" />
                <div className="flex flex-col -space-y-0.5">
                  <span className="font-futuristic italic text-lg font-bold tracking-wide text-slate-900 dark:text-primary-services">
                    Atlas
                  </span>
                  <span className="font-futuristic italic text-[10px] font-medium tracking-[0.15em] text-slate-500 dark:text-slate-400">
                    Web Development
                  </span>
                </div>
              </a>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
              Excellence en stratégie digitale et développement web performant. Votre partenaire pour des
              solutions web modernes.
            </p>
            {/* <div className="flex gap-4">
              <a
                className="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-primary-services hover:border-primary-services transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">public</span>
              </a>
              <a
                className="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-primary-services hover:border-primary-services transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </a>
            </div> */}
          </div>
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <Link href="/services#web-creation">
                  <a className="hover:text-primary-services transition-colors">Création web</a>
                </Link>
              </li>
              <li>
                <Link href="/services#project-management">
                  <a className="hover:text-primary-services transition-colors">Gestion de projet</a>
                </Link>
              </li>
              <li>
                <Link href="/services#strategic-support">
                  <a className="hover:text-primary-services transition-colors">Support stratégique</a>
                </Link>
              </li>
              <li>
                <Link href="/services#training">
                  <a className="hover:text-primary-services transition-colors">Modules de formation</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-wider">Entreprise</h3>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <Link href="/#about">
                  <a className="hover:text-primary-services transition-colors">Notre histoire</a>
                </Link>
              </li>
              <li>
                <Link href="/#method">
                  <a className="hover:text-primary-services transition-colors">Méthodologie</a>
                </Link>
              </li>
              <li>
                <a className="hover:text-primary-services transition-colors" href="#">
                  Carrières
                </a>
              </li>
              {/* <li>
                <a className="hover:text-primary-services transition-colors" href="#">
                  Blog
                </a>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-wider">Mentions légales</h3>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <Link href="/mentions-legales">
                  <a className="hover:text-primary-services transition-colors">Mentions légales</a>
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite">
                  <a className="hover:text-primary-services transition-colors">Politique de confidentialité</a>
                </Link>
              </li>
              <li>
                <Link href="/conditions-generales-utilisation">
                  <a className="hover:text-primary-services transition-colors">Conditions d&apos;utilisation</a>
                </Link>
              </li>
              <li>
                <Link href="/cookies">
                  <a className="hover:text-primary-services transition-colors">Politique des cookies</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-center text-xs text-slate-400">
          <p>
            © 2026 <span className="font-futuristic italic font-bold text-slate-900 dark:text-primary-services">Atlas Web Development</span>. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
