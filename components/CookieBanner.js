import { useState, useEffect } from 'react';
import Link from 'next/link';

const CONSENT_KEY = 'atlas_cookie_consent';

export function applyConsent(choice) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(CONSENT_KEY, choice);
  } catch (e) {
    // localStorage indisponible
  }
  if (!window.gtag) return;
  if (choice === 'all') {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });
  } else {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }
}

export function getStoredConsent() {
  if (typeof window === 'undefined') return null;
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

export function hasConsentForAnalytics() {
  return getStoredConsent() === 'all';
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const stored = getStoredConsent();
    if (stored === null) setVisible(true);
  }, [mounted]);

  const acceptAll = () => {
    applyConsent('all');
    setVisible(false);
  };

  const refuseAll = () => {
    applyConsent('necessary');
    setVisible(false);
  };

  if (!visible || !mounted) return null;

  return (
    <div
      role="dialog"
      aria-label="Choix des cookies"
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-ink/10 bg-surface p-5"
    >
      <div className="mx-auto flex max-w-atlas flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-0 md:px-8 min-w-0">
        <p className="text-sm text-muted max-w-2xl min-w-0 break-words">
          Nous utilisons des cookies pour le fonctionnement du site et, avec votre accord, pour
          mesurer l&apos;audience (Google Analytics). Vous pouvez tout accepter, tout refuser ou{' '}
          <Link href="/cookies">
            <a className="text-gold underline hover:no-underline">gérer les cookies</a>
          </Link>
          .
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 min-w-0">
          <button type="button" onClick={refuseAll} className="btn-ghost-gold">
            Tout refuser
          </button>
          <button type="button" onClick={acceptAll} className="btn-gold">
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}
