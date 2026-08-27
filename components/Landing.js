import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import Philosophy from './Philosophy';
import Expertise from './Expertise';
import Portfolio from './Portfolio';
import Process from './Process';
import AboutHenri from './AboutHenri';
import ProjectCta from './ProjectCta';

export default function Landing() {
  return (
    <>
      <Head>
        <title>Atlas Web Development | Stratégie &amp; Développement Digital</title>
        <meta
          name="description"
          content="Développement SaaS, automatisation (n8n) et pilotage digital pour entreprises. Sites vitrines, stratégie numérique. Expertise React, Next.js et TypeScript. Basé à Valenciennes, au service de clients internationaux."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="font-body bg-background text-ink antialiased atlas-grid min-h-screen">
        <Navbar activePage="home" />
        <main id="main-content">
          <Hero />
          <Philosophy />
          <Expertise />
          <Portfolio />
          <Process />
          <AboutHenri />
          <ProjectCta />
        </main>
        <Footer />
      </div>
    </>
  );
}
