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
        <title>Atlas Web Development | Sites internet &amp; applications</title>
        <meta
          name="description"
          content="Studio web indépendant à Valenciennes : création et refonte de sites internet, applications web et mobiles. Un interlocuteur unique, du besoin à la mise en ligne."
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
