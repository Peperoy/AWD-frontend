import { useState, useEffect } from 'react';
import Link from 'next/link';

const CONSENT_KEY = 'atlas_cookie_consent'; // 'all' | 'necessary'

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
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 bg-surface-dark border-t border-slate-700 shadow-lg"
    >
      <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm text-slate-300">
          Nous utilisons des cookies pour le fonctionnement du site et, avec votre accord, pour
          mesurer l&apos;audience (Google Analytics). Vous pouvez tout accepter, tout refuser ou{' '}
          <Link href="/cookies">
            <a className="text-primary-services underline hover:no-underline">gérer les cookies</a>
          </Link>
          .
        </p>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={refuseAll}
            className="px-4 py-2 text-sm font-medium rounded-lg border border-slate-500 text-slate-300 hover:bg-slate-700/50 hover:border-slate-400 transition-colors"
          >
            Tout refuser
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-primary-services text-white hover:opacity-90 transition-opacity"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}
