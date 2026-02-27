import '../styles/globals.css';
import Head from 'next/head';
import GoogleAnalytics from '../components/GoogleAnalytics';
import CookieBanner from '../components/CookieBanner';

function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <div className="dark">
        <Component {...pageProps} />
      </div>
      <CookieBanner />
    </>
  );
}

export default App;
