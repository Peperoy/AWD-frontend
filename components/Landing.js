import Head from 'next/head';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';

const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuALVKqgpM6fllgBtz3tzwZaAsdsYvC-WoimKrZ7ny_GmZoOuIqcmApWcXCnPUM6PAa6MrkJgTOk4CeltiljEwblSPKXz5e0ppjcu4XHtqzpMc1N7R1f2CZ_efbSHEndSHTEXVqQ7fDKILWKK-ZmxgOwGYF7xmnDVVS_lz5k9F8rcRFieqfvKFtcmZBmgjQcsq_k9b3ppP0guJrV3dvYnXoFMIMOmCeymV4PLa25CJ2BuRa13yI1DxmKiMFLaFCFwq_yzW5Bo9QxuiM';

const DASHBOARD_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAHrJKJA9dHknJTcu-ifZf_dcAAXxKm5viRSDCy7wW4OA2HcbLiLP7--QzBdV_Oroj9jqkXEi11MPTojWWgkhLPJU1T3hjLfkHet6l145vy0EAPEjsvwu-9ke5LBOX5-i8kvGDTVe_QT51vof_hyad63bxGC7180tLeoEz-ZlpeSpAhyWJJSlxmRdbce3h9VwFfeJPY9yelIupYT7f6Wp0ClZlydjrXNueAgT_R49uzUzMoTu1J_5xi1ums2UibUDNBxPZH4tEMyIo';

const TEAM_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBfFDiUiBvr57hhB_wj9NW4RoESrzpW7RFxJJ6OMVtbD8xtS3J4ZM2N5HWtjNTMrEoEiR_d1g8-Bk2LpXFau2CBAsngEJ7cZdVJrGR4EE2vsPkpd9pbL-PQPcFOgBMJ6a-jEN5P5vntb30PoK__Lpod-LI7Iq5vu9xgOAk9wMC5ElMkUBcWbCPBbuliki041Eqn5CqPcACAMIs_yUUgMSbnFqf_454HDZLIFCShhN_FWkokH54eE5NEJKgeGy9heqX8eNZbkQQXP4Q';

const HENRI_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBbp_gMV2fuYKb2b44YKPEdTZPssEkmT8vHDuq32yG79u6_HKPhBe8-IKt2jiG46YvJF-ZO7LHIM_7dA2HRJtC1Dfsp0O8vM3WlN2nYegTuAyg7_hnNad8nh6PBX9BgPc2A-bhFqqDEhLx5mROGQuwbi5ZGNbnStv_OMPYpaGQ4hFI_YkMe0NgEs4p_y9ZDt13SBb4d0b-Bne5mOW6BEpHVILY6HOY0cBYZIyMqk0661wro9FjPwInz6nbEb9qP6J5GoEKPpaXTywQ';

export default function Landing() {
  return (
    <>
      <Head>
        <title>Atlas Web Development | Stratégie &amp; Développement Digital</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="font-body bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
        <Navbar activePage="home" />

        {/* Hero */}
        <header id="hero" className="relative pt-20 pb-32 overflow-hidden hero-gradient">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary dark:text-secondary font-semibold text-xs uppercase tracking-widest mb-6">
              Stratégie Numérique &amp; Web Dev
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-extrabold leading-[1.1] mb-8 dark:text-white">
                Développement web &amp; pilotage digital pour entreprises{' '}
                <span className="text-primary">ambitieuses</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
                Nous transformons vos objectifs business en expériences numériques haut de gamme.
                Expertise technique et vision stratégique au service de votre croissance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all transform hover:-translate-y-1"
                  href="#contact"
                >
                  Démarrer mon projet
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <a
                  className="flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 px-8 py-4 rounded-xl font-bold text-lg transition-all"
                  href="#services"
                >
                  Nos expertises
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-navy-deep/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Digital Strategy Dashboard"
                  className="w-full object-cover aspect-square"
                  src="/Dev.jpeg"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </header>

        {/* Services */}
        <section className="py-24 bg-white dark:bg-slate-900/50" id="services">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Nos piliers d&apos;excellence</h2>
              <p className="text-slate-600 dark:text-slate-400">
                Une approche 360° pour couvrir l&apos;ensemble de votre chaîne de valeur numérique.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/50 transition-all group shadow-sm hover:shadow-xl">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl">code</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-4">Création Web</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  Développement de sites vitrines et applications web sur-mesure. Performance, SEO-ready
                  et responsive design impeccable.
                </p>
                <ul className="space-y-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>{' '}
                    React / Next.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>{' '}
                    WordPress &amp; Headless CMS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>{' '}
                    Architecture Cloud
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/50 transition-all group shadow-sm hover:shadow-xl">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl">account_tree</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-4">Pilotage Digital</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  Gestion de projets complexes et accompagnement stratégique. Nous devenons votre CTO
                  externalisé pour piloter vos actifs digitaux.
                </p>
                <ul className="space-y-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>{' '}
                    Roadmap produit
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>{' '}
                    Audit &amp; Sécurité
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>{' '}
                    Management d&apos;équipes
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/50 transition-all group shadow-sm hover:shadow-xl">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl">campaign</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-4">Communication</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  Stratégie de contenu et acquisition. Faire rayonner votre marque sur les canaux
                  digitaux avec un ROI mesurable.
                </p>
                <ul className="space-y-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>{' '}
                    Branding &amp; UI/UX
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>{' '}
                    Social Media Strategy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>{' '}
                    Content Marketing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="py-24 bg-slate-50 dark:bg-navy-deep/10" id="portfolio">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                  Portfolio
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-extrabold dark:text-white mb-6">
                  Réalisations &amp; Projets
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Découvrez comment nous aidons nos clients à franchir un nouveau cap digital à travers
                  des solutions technologiques robustes et innovantes.
                </p>
              </div>
              <a
                className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group"
                href="#contact"
              >
                Lancer un projet similaire
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </a>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <a
                href="https://thewhiteshop.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-2 block"
              >
                <div className="relative h-64 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="The White Shop - Boutique vêtements streetwear"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="/TWS.png"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="text-white font-semibold flex items-center gap-2">
                      Voir le site <span className="material-symbols-outlined">open_in_new</span>
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex flex-col gap-2 mb-4 w-fit">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider w-fit">
                      E-commerce
                    </span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full uppercase tracking-wider w-fit">
                      Streetwear & Workwear
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4 dark:text-white">The White Shop</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    Boutique de vêtements homme à Valenciennes. Site e-commerce streetwear et workwear
                    avec une expérience d&apos;achat fluide et moderne.
                  </p>
                </div>
              </a>
              <a
                href="https://ho-lamian-frontend.vercel.app/menuBook"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-2 block"
              >
                <div className="relative h-64 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Ho Lamian - Restaurant chinois Rouen"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="/HO-Lamian.png"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="text-white font-semibold flex items-center gap-2">
                      Voir le site <span className="material-symbols-outlined">open_in_new</span>
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex flex-col gap-2 mb-4 w-fit">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider w-fit">
                      Restaurant
                    </span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full uppercase tracking-wider w-fit">
                      Menu digital
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4 dark:text-white">Ho Lamian</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    Restaurant de saveurs traditionnelles chinoises à Rouen. Carte interactive et
                    menu digital pour une découverte fluide des plats.
                  </p>
                </div>
              </a>
              <a
                href="https://honoris-frontend.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-2 block"
              >
                <div className="relative h-64 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Honoris Cosa"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src="/Honoris.png"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="text-white font-semibold flex items-center gap-2">
                      Voir le site <span className="material-symbols-outlined">open_in_new</span>
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex flex-col gap-2 mb-4 w-fit">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider w-fit">
                      Développement Web
                    </span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full uppercase tracking-wider w-fit">
                      Next.js
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4 dark:text-white">Honoris Cosa</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    Projet web développé avec Next.js. Interface moderne et performante.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Method */}
        <section className="py-24 bg-white dark:bg-slate-900/50 overflow-hidden" id="method">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Notre méthode de travail</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg">
                  Un processus structuré pour garantir la réussite de chaque projet, de la conception au
                  déploiement final.
                </p>
                <div className="space-y-12 relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
                  <div className="relative pl-16">
                    <div className="absolute left-0 w-12 h-12 bg-white dark:bg-slate-800 border-2 border-primary rounded-full flex items-center justify-center font-bold text-primary z-10 shadow-lg">
                      01
                    </div>
                    <h4 className="font-display font-bold text-xl mb-2">Analyse &amp; Stratégie</h4>
                    <p className="text-slate-500 dark:text-slate-400">
                      Immersion dans votre métier pour comprendre vos enjeux et définir les indicateurs
                      clés de succès (KPIs).
                    </p>
                  </div>
                  <div className="relative pl-16">
                    <div className="absolute left-0 w-12 h-12 bg-white dark:bg-slate-800 border-2 border-primary rounded-full flex items-center justify-center font-bold text-primary z-10 shadow-lg">
                      02
                    </div>
                    <h4 className="font-display font-bold text-xl mb-2">Conception &amp; Prototypage</h4>
                    <p className="text-slate-500 dark:text-slate-400">
                      Création des parcours utilisateurs et des maquettes haute fidélité pour une
                      expérience fluide et moderne.
                    </p>
                  </div>
                  <div className="relative pl-16">
                    <div className="absolute left-0 w-12 h-12 bg-white dark:bg-slate-800 border-2 border-primary rounded-full flex items-center justify-center font-bold text-primary z-10 shadow-lg">
                      03
                    </div>
                    <h4 className="font-display font-bold text-xl mb-2">Développement Agile</h4>
                    <p className="text-slate-500 dark:text-slate-400">
                      Codage itératif avec des points de suivi réguliers pour ajuster les
                      fonctionnalités en temps réel.
                    </p>
                  </div>
                  <div className="relative pl-16">
                    <div className="absolute left-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-white z-10 shadow-lg shadow-primary/40">
                      04
                    </div>
                    <h4 className="font-display font-bold text-xl mb-2">Déploiement &amp; Optimisation</h4>
                    <p className="text-slate-500 dark:text-slate-400">
                      Lancement officiel suivi d&apos;une phase d&apos;analyse de données pour maximiser
                      vos conversions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl rotate-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Team meeting" className="rounded-xl" src={TEAM_IMG} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-24 bg-white dark:bg-slate-900" id="about">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-navy-deep rounded-3xl p-10 md:p-16 flex flex-col md:flex-row gap-16 items-center overflow-hidden relative">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0 100 L100 0 L100 100 Z" fill="white"></path>
                </svg>
              </div>
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden flex-shrink-0 z-10 border-4 border-primary/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Henri De Boever" className="w-full h-full object-cover" src="/IMG_4270.jpg" />
              </div>
              <div className="z-10">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
                  Henri De Boever
                </h2>
                <p className="text-cyan-300 font-bold tracking-widest uppercase text-sm mb-6">
                  Expert Technique &amp; Stratégie Digitale
                </p>
                <div className="space-y-4 text-slate-300 text-lg leading-relaxed max-w-2xl">
                  <p>
                  Je combine une double compétence en management digital et en développement web pour accompagner les entreprises dans la conception et la structuration de leurs projets numériques.
                  </p>
                  <p>
                  Issu d’un parcours en gestion de projet et formé au développement d’applications web, j’interviens à la fois sur la dimension technique et sur le pilotage stratégique. Mon objectif est simple : concevoir des solutions utiles, cohérentes et réellement adaptées aux besoins des organisations.
                  </p>
                  <p>Chaque projet est abordé avec méthode : compréhension des enjeux, cadrage clair, développement structuré et suivi opérationnel.</p>
                </div>
                <div className="mt-8 flex gap-4">
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                    <span className="text-white font-bold">6+</span>
                    <span className="text-slate-400 text-sm">Années d’expérience en gestion et pilotage</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                    <span className="text-white font-bold">100%</span>
                    <span className="text-slate-400 text-sm">Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 relative overflow-hidden" id="contact">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-8 dark:text-white">
              Vous avez un projet digital ?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
              Ne laissez pas votre croissance au hasard. Discutons ensemble de la meilleure stratégie à
              adopter pour votre entreprise.
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-6">
              <Link href="/contact">
                <a className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-primary/40 transition-all transform hover:scale-105 flex items-center gap-3">
                  <span className="material-symbols-outlined">calendar_today</span>
                  Réserver un rendez-vous
                </a>
              </Link>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Réponse garantie sous 24h</p>
            </div>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]"></div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
