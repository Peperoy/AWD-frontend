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
          content="Studio web indépendant à Valenciennes : création et refonte de sites internet, applications web et mobiles. Un interlocuteur unique, du besoin à la mise en ligne."
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
