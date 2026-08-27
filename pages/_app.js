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
        <meta
          name="description"
          content="Atlas Web Development — Applications SaaS, automatisation de processus (n8n) et pilotage digital pour entreprises. Sites vitrines, accompagnement technique. Expertise React, Next.js et TypeScript."
        />
      </Head>
      <Component {...pageProps} />
      <CookieBanner />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
