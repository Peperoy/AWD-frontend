import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import ServicesExtended from './ServicesExtended';

const BLOCKS = [
  {
    id: 'sites-web',
    index: '01',
    label: 'Sites web',
    title: 'Sites vitrines & présence digitale',
    text: 'Présence web SEO et mobile-first pour présenter votre activité et capter des demandes qualifiées. Identité éditoriale, performance, conversion.',
    points: ['SEO & mobile-first', 'CMS headless & APIs', 'Identité visuelle soignée'],
  },
  {
    id: 'applications-web',
    index: '02',
    label: 'Applications web',
    title: 'SaaS, n8n & ingénierie produit',
    text: 'Nous concevons des produits numériques utiles au quotidien : applications SaaS, workflows automatisés avec n8n, stack pensée pour la scalabilité.',
    points: ['React / Next.js & TypeScript', 'Automatisation & intégrations (n8n)', 'Plateformes métier sur-mesure'],
  },
  {
    id: 'applications-mobiles',
    index: '03',
    label: 'Applications mobiles',
    title: 'Expériences natives, performance d’abord',
    text: 'Interfaces mobiles fluides, pensées pour le geste et la vitesse. Du PWA au produit mobile, nous gardons la même exigence d’ingénierie et de design.',
    points: ['PWA & apps hybrides', 'Parcours tactiles soignés', 'Offline-first quand c’est utile'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services détaillés | Atlas Web Development</title>
        <meta
          name="description"
          content="Découvrez les services Atlas : SaaS & applications web, automatisation n8n, gestion de projet, conseil stratégique et formation."
        />
      </Head>
      <div className="font-body bg-background text-ink antialiased atlas-grid min-h-screen">
        <Navbar activePage="services" />
        <section className="relative overflow-hidden border-b border-ink/10 py-20 md:py-28">
          <div className="atlas-glow pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative mx-auto max-w-atlas px-5 md:px-16">
            <p className="label-caps mb-6">Expertise</p>
            <h1 className="font-display text-display-md uppercase max-w-4xl">
              Notre expertise
              <br />
              &amp; stratégie digitale
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted leading-relaxed">
              Le lien entre complexité technique et objectifs business : produits SaaS, automatisation
              n8n et présence web, adaptés à votre trajectoire de croissance.
            </p>
          </div>
        </section>
        <main>
          {BLOCKS.map((block) => (
            <section key={block.id} id={block.id} className="border-b border-ink/10 py-20 md:py-24">
              <div className="mx-auto max-w-atlas px-5 md:px-16 grid md:grid-cols-12 gap-8">
                <p className="label-caps md:col-span-2">{block.index} /</p>
                <div className="md:col-span-10">
                  <p className="label-caps mb-3">{block.label}</p>
                  <h2 className="font-display text-headline uppercase mb-6">{block.title}</h2>
                  <p className="text-muted text-lg leading-relaxed max-w-2xl mb-8">{block.text}</p>
                  <ul className="space-y-3">
                    {block.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm">
                        <span className="h-1 w-1 bg-gold shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
          <ServicesExtended />
        </main>
        <Footer />
      </div>
    </>
  );
}
