import '../styles/globals.css';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import GoogleAnalytics from '../components/GoogleAnalytics';
import CookieBanner from '../components/CookieBanner';

function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics />
      <Head>
        <meta name="description" content="Atlas Web Development — Applications SaaS, automatisation de processus (n8n) et pilotage digital pour entreprises. Sites vitrines, accompagnement technique. Expertise React, Next.js et TypeScript." />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="dark">
        <Component {...pageProps} />
      </div>
      <CookieBanner />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
