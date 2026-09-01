import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ContactFormPanel from './ContactFormPanel';
import DevisForm from './DevisForm';
import { PACK_IDS } from '../data/offers';

const TABS = [
  { id: 'message', label: 'Message' },
  { id: 'devis', label: 'Devis' },
];

export default function ContactTabs({ calendarUrl = '' }) {
  const router = useRouter();
  const [tab, setTab] = useState('message');
  const packParam = typeof router.query.pack === 'string' ? router.query.pack : '';
  const initialPack = PACK_IDS.includes(packParam) ? packParam : '';

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    const nextTab = router.query.tab === 'devis' ? 'devis' : 'message';
    setTab(nextTab);
    if (typeof window !== 'undefined' && window.location.hash === '#rdv') {
      requestAnimationFrame(() => {
        document.getElementById('rdv')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [router.isReady, router.query.tab]);

  const selectTab = (next) => {
    setTab(next);
    const query = { ...router.query };
    if (next === 'devis') {
      query.tab = 'devis';
    } else {
      delete query.tab;
    }
    router.replace({ pathname: '/contact', query }, undefined, { shallow: true });
  };

  return (
    <div className="min-w-0 pb-16 lg:py-24">
      <div className="flex border-b border-ink/15 mb-8" role="tablist" aria-label="Type de demande">
        {TABS.map((item) => {
          const active = tab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              className={`font-label text-[11px] font-bold uppercase tracking-[0.16em] px-5 py-3 border-b-2 -mb-px transition-colors ${
                active ? 'border-gold text-gold' : 'border-transparent text-ink/60 hover:text-ink'
              }`}
              onClick={() => selectTab(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {tab === 'devis' ? <DevisForm initialPack={initialPack} /> : <ContactFormPanel />}

      <aside id="rdv" className="card-sharp mt-8 scroll-mt-24 p-6 md:p-8">
        <span className="connection-dot" />
        <p className="label-caps mb-3">Rendez-vous</p>
        <h2 className="font-display text-2xl font-bold uppercase mb-3">Un créneau plutôt qu’un mail</h2>
        {calendarUrl ? (
          <>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Choisissez un horaire. On pose le besoin ensemble, 20 à 30 minutes.
            </p>
            <a href={calendarUrl} className="btn-ghost-gold" target="_blank" rel="noopener noreferrer">
              Prendre rendez-vous →
            </a>
          </>
        ) : (
          <p className="text-sm text-muted leading-relaxed">
            Proposez un créneau dans votre message : jour, créneau, et si vous préférez visio ou
            téléphone.
          </p>
        )}
      </aside>
    </div>
  );
}
