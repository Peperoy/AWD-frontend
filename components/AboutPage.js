import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import AboutIntro from './AboutIntro';
import AboutJourney from './AboutJourney';
import AboutPillars from './AboutPillars';
import AboutStack from './AboutStack';
import AboutMethodDetailed from './AboutMethodDetailed';
import ProjectCta from './ProjectCta';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>À propos | Atlas Web Development</title>
        <meta
          name="description"
          content="Derrière Atlas, Henri De Boever : un profil hybride entre management digital, gestion de projet, entrepreneuriat et développement full-stack. Parcours, piliers, stack et méthode."
        />
      </Head>
      <div className="font-body bg-background text-ink antialiased atlas-grid min-h-screen">
        <Navbar activePage="about" />
        <main>
          <AboutIntro />
          <AboutJourney />
          <AboutPillars />
          <AboutStack />
          <AboutMethodDetailed />
          <ProjectCta />
        </main>
        <Footer />
      </div>
    </>
  );
}
