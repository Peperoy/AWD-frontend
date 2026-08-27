import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import ServicesExtended from './ServicesExtended';

const BLOCKS = [
  {
    id: 'sites-web',
    index: '01',
    label: 'Sites web',
    title: 'Un site qui présente votre activité et amène le contact',
    text: 'Création ou refonte : montrer qui vous êtes, vos prestations, et rendre la prise de contact simple — y compris sur téléphone. Travail sur le référencement local quand c’est pertinent.',
    points: [
      'Présentation claire de l’activité',
      'Parcours vers la prise de contact',
      'Adapté au mobile',
      'Référencement local, sans promesse de chiffres',
    ],
  },
  {
    id: 'applications-web',
    index: '02',
    label: 'Applications web',
    title: 'Un outil pensé pour votre activité',
    text: 'Application web, outil métier ou produit en ligne : partir du besoin réel, le structurer, puis le construire. Pour les tâches répétitives, on peut aussi relier vos outils entre eux.',
    points: [
      'Outil métier ou produit sur-mesure',
      'Fonctionnalités et intégrations utiles',
      'Automatisation des tâches répétitives',
      'Évolution par étapes, avec vous',
    ],
  },
  {
    id: 'applications-mobiles',
    index: '03',
    label: 'Applications mobiles',
    title: 'Une application dans la poche de vos clients ou de vos équipes',
    text: 'Concevoir et développer une application mobile à partir de l’usage réel : ce qu’il faut faire, dans quel ordre, et comment ça se tient dans la main.',
    points: [
      'Parcours simple sur téléphone',
      'Pour vos clients ou vos équipes',
      'Identité et expérience travaillées',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Atlas Web Development</title>
        <meta
          name="description"
          content="Création et refonte de sites internet, applications web et mobiles. Un interlocuteur unique pour cadrer, concevoir et réaliser votre projet digital."
        />
      </Head>
      <div className="font-body bg-background text-ink antialiased atlas-grid min-h-screen">
        <Navbar activePage="services" />
        <section className="relative overflow-hidden border-b border-ink/10 py-20 md:py-28">
          <div className="atlas-glow pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative mx-auto max-w-atlas px-5 md:px-16">
            <p className="label-caps mb-6">Services</p>
            <h1 className="font-display text-display-md uppercase max-w-4xl break-words min-w-0">
              Ce que Atlas
              <br />
              peut faire pour vous
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted leading-relaxed">
              Un site, une refonte, une application web ou mobile. Un seul interlocuteur pour
              comprendre le besoin, structurer le projet et le réaliser.
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
                  <h2 className="font-display text-headline uppercase mb-6 break-words min-w-0">{block.title}</h2>
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
