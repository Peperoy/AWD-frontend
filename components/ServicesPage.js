import Head from 'next/head';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';

const CODE_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCrc1WStuMy1Yp4I466ixYZBM8evtCxIDovnJ3qNpq-zWmlAs_e8oP_PhUwMvzFw9CCMdd1KH8yXj71rBR7OLW7QfUywPYNs1j_SbdCRGNg5A68L7Ogf1p-0UUgUZIxIYkyuAPDH3VHCeNPjKrB1q1OzGCt4Ax8XCuvc8RcYVwAjMjIlT2tNKSFbRCPFXSog1MIaRKjL1vq-pbHrEDJtosUUXzau18WLdGAbQ6p6lsiru-I1MBkaqGsOHf8KyTy_z7ROWmvLxiJRrE';

const TEAM_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAGrzSf-6gy1PpIwBEXBAAnQU-M9GHYvMxcYmsS9uOzvG1YXi6VvlEqJEJeBaQPhROowJgepRZMPb6R4r43OYv8RdTrNAaG33qcnt8ST6dKLPlAOGxRATrQWKq6DKUtURycD2YXsB1ekljwIpe-EsJ1kze6ZCh_wa7t85n36zy_sbv2a3YVtmzoyqKyf2i75pp8CzC9yJON1j-_3KRSrBK5PLG0mj2Fz1p2Z_9ySW_ZjRisUT7veeCoyFORRzsvIeNvP2D5gNnHduo';

const STRATEGY_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDcg4e-WZ0UILJ9xl4X_4bNtk4KlPP30CllUutuWHgW-JW-ia-smcuFqNey39iWPqKcDRQoHA5K-kPZX4WNqzg9U8D4InDDP634sHdC5LoqG8lY9Vel6vQ_mcoYzWWfBkada8BMQ6Ryskwu6eTSlBUMKk8iisVi5zABVlOveA1wOAI52dh2SgdR5V10O6EGdocEKqmqDElxF4vj1RSGTmP7rqsk5y8RCJGSzxizXg6NJMZnXSq1poWX76oPBiQ8z8aofEHdCqewymY';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services détaillés | Atlas Web Development</title>
        <meta
          name="description"
          content="Découvrez les services Atlas : Création web, Gestion de projet, Support stratégique et Formation."
        />
      </Head>
      <div className="font-sans antialiased text-slate-900 bg-background-light dark:bg-background-darker dark:text-slate-100">
        <Navbar activePage="services" />

        {/* Hero */}
        <section className="relative pt-20 pb-16 hero-gradient-services overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-display-outfit text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              Notre <span className="text-primary-services">expertise</span>
              <br />
              &amp; stratégie digitale
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-10">
              Nous faisons le lien entre la complexité technique et les objectifs business, en livrant des solutions
              web performantes adaptées à votre trajectoire de croissance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-sm font-medium bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                <span className="material-symbols-outlined text-secondary-services text-[18px]">check_circle</span>
                Orienté stratégie
              </div>
              <div className="flex items-center gap-2 text-sm font-medium bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                <span className="material-symbols-outlined text-secondary-services text-[18px]">bolt</span>
                Performance d&apos;abord
              </div>
              <div className="flex items-center gap-2 text-sm font-medium bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                <span className="material-symbols-outlined text-secondary-services text-[18px]">verified_user</span>
                Sécurité prioritaire
              </div>
            </div>
          </div>
        </section>

        <main className="py-12 md:py-24 space-y-24 md:space-y-32">
          {/* Web Creation */}
          <section className="container mx-auto px-6" id="web-creation">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-services/10 text-primary-services text-xs font-bold uppercase tracking-widest mb-4">
                  <span className="material-symbols-outlined text-[14px]">code</span>
                  Development
                </div>
                <h2 className="font-display-outfit text-3xl md:text-4xl font-bold mb-6">
                  Création web &amp; ingénierie
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Nous ne faisons pas que des sites web ; nous concevons des expériences numériques. Des sites
                  vitrines à forte conversion aux applications web complexes et data-driven, notre stack est
                  pensée pour la scalabilité et la vitesse.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary-services">
                      <span className="material-symbols-outlined">web</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Sites vitrines</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Designs SEO, mobile-first qui captent l&apos;essence de votre marque et transforment les
                        visiteurs en leads.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary-services">
                      <span className="material-symbols-outlined">layers</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Applications web complexes</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Plateformes SaaS sur-mesure et outils internes développés avec React, Node.js et les
                        frameworks modernes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-primary-services/20 to-secondary-services/20 rounded-2xl blur-2xl group-hover:opacity-75 transition-opacity"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Software development code on screen"
                    className="relative rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 object-cover w-full h-[400px]"
                    src={CODE_IMG}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Project Management */}
          <section className="bg-slate-50 dark:bg-surface-dark py-24" id="project-management">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-bl from-primary-services/10 to-secondary-services/20 rounded-2xl blur-2xl"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Team collaborating on project management board"
                    className="relative rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 object-cover w-full h-[400px]"
                    src={TEAM_IMG}
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-services/10 text-secondary-services text-xs font-bold uppercase tracking-widest mb-4">
                    <span className="material-symbols-outlined text-[14px]">account_tree</span>
                    Management
                  </div>
                  <h2 className="font-display-outfit text-3xl md:text-4xl font-bold mb-6">
                    Coordination technique de projet
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    Les projets complexes exigent plus que du code. Nous assurons la structuration et le pilotage
                    technique nécessaires pour respecter les délais et maintenir la qualité.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary-services mt-0.5">check_circle</span>
                      <span className="font-medium">Méthodologie Agile &amp; planification de sprints</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary-services mt-0.5">check_circle</span>
                      <span className="font-medium">Rédaction de spécifications techniques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary-services mt-0.5">check_circle</span>
                      <span className="font-medium">Revue d&apos;architecture &amp; assurance qualité</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary-services mt-0.5">check_circle</span>
                      <span className="font-medium">Gestion des risques &amp; allocation des ressources</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Strategic Support */}
          <section className="container mx-auto px-6" id="strategic-support">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-bold uppercase tracking-widest mb-4">
                  <span className="material-symbols-outlined text-[14px]">insights</span>
                  Advisory
                </div>
                <h2 className="font-display-outfit text-3xl md:text-4xl font-bold mb-6">
                  Audit &amp; stratégie digitale
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Pilotez votre paysage digital en toute confiance. Nos services de conseil stratégique vous
                  aident à identifier les freins, saisir les opportunités et aligner la technologie sur vos
                  objectifs business.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary-services transition-colors">
                    <h4 className="font-bold text-primary-services mb-2">SEO &amp; Performance</h4>
                    <p className="text-sm text-slate-500">
                      Audits techniques approfondis pour améliorer la visibilité et la vitesse de chargement.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary-services transition-colors">
                    <h4 className="font-bold text-primary-services mb-2">Audit UX/UI</h4>
                    <p className="text-sm text-slate-500">
                      Évaluations heuristiques pour améliorer le parcours utilisateur et les conversions.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary-services transition-colors">
                    <h4 className="font-bold text-primary-services mb-2">Revue tech stack</h4>
                    <p className="text-sm text-slate-500">
                      Modernisation des systèmes legacy et optimisation de l&apos;infrastructure d&apos;hébergement.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary-services transition-colors">
                    <h4 className="font-bold text-primary-services mb-2">Analyse concurrentielle</h4>
                    <p className="text-sm text-slate-500">
                      Benchmark de votre présence digitale face aux leaders du secteur.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-primary-services/20 rounded-2xl blur-2xl"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Analytical graphs and strategy planning"
                    className="relative rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 object-cover w-full h-[400px]"
                    src={STRATEGY_IMG}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Training */}
          <section className="container mx-auto px-6" id="training">
            <div className="bg-primary-services rounded-[2rem] p-8 md:p-16 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-secondary-services/20 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-2/3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                    <span className="material-symbols-outlined text-[14px]">stars</span>
                    Offre émergente
                  </div>
                  <h2 className="font-display-outfit text-3xl md:text-5xl font-bold mb-6">
                    Formez votre équipe : formation professionnelle
                  </h2>
                  <p className="text-white/90 text-lg mb-8 leading-relaxed">
                    Le secteur tech évolue vite. Nous lançons des modules de formation dédiés pour que vos équipes
                    maîtrisent les outils que nous construisons et restent à la pointe du développement web.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined bg-white/10 p-2 rounded-lg">school</span>
                      <span className="font-medium">Formation gestion CMS</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined bg-white/10 p-2 rounded-lg">psychology</span>
                      <span className="font-medium">Bonnes pratiques SEO &amp; contenu</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined bg-white/10 p-2 rounded-lg">shield</span>
                      <span className="font-medium">Sécurité web de base</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined bg-white/10 p-2 rounded-lg">monitoring</span>
                      <span className="font-medium">Analytics &amp; interprétation des données</span>
                    </div>
                  </div>
                  <Link href="/contact">
                    <a className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-services font-bold rounded-xl hover:bg-slate-50 transition-colors">
                      Demander un accès anticipé
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </a>
                  </Link>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-full max-w-[280px] aspect-square bg-white/5 border border-white/20 rounded-[2.5rem] flex flex-col items-center justify-center backdrop-blur-sm">
                    <span className="material-symbols-outlined text-7xl mb-4">cast_for_education</span>
                    {/* <span className="text-xl font-bold">Atlas Academy</span>
                    <span className="text-sm opacity-60">Lancement T3 2024</span> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* CTA */}
        <section className="py-24 border-t border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display-outfit text-3xl md:text-4xl font-bold mb-6">
              Prêt à faire grandir votre présence digitale ?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto">
              Planifiez un appel découverte gratuit pour discuter de vos besoins et de la façon dont Atlas peut
              accompagner votre croissance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <a className="px-8 py-4 bg-primary-services text-white font-bold rounded-xl shadow-lg shadow-primary-services/30 hover:-translate-y-0.5 transition-all">
                  Réserver une consultation gratuite
                </a>
              </Link>
              <Link href="/#portfolio">
                <a className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                  Voir les cas clients
                </a>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
