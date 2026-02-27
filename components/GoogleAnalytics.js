import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Envoie un page_view à GA4 (appelé à chaque changement de route).
 * Ne fait rien si GA n'est pas chargé ou si l'utilisateur n'a pas consenti.
 */
function PageViewTracker() {
  const router = useRouter();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) return;
    window.gtag('event', 'page_view', {
      page_path: router.asPath,
      page_title: document.title,
    });
  }, [router.asPath]);

  return null;
}

/**
 * Intégration Google Analytics 4 avec Consent Mode v2 (RGPD/CNIL).
 * Par défaut analytics_storage = 'denied' : aucun cookie analytics tant que
 * l'utilisateur n'a pas consenti (via un bandeau cookies).
 * Quand vous ajouterez un bandeau, appelez window.gtag('consent', 'update', { analytics_storage: 'granted' }).
 */
export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      {/* Consent Mode v2 : refus par défaut pour rester conforme RGPD */}
      <Script
        id="ga-consent-default"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied'
            });
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
          `,
        }}
      />
      {/* Chargement du script gtag.js */}
      <Script
        id="ga-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <PageViewTracker />
    </>
  );
}
