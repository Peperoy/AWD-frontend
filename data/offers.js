export const PACKS = [
  {
    id: 'audit',
    index: '01',
    title: 'Audit / cadrage',
    teaser: false,
    range: '400 – 1 200 €',
    period: '',
    summary: 'Faire le point avant de construire : priorités, périmètre, prochaines étapes.',
    deliverables: [
      'Diagnostic de l’existant ou du besoin',
      'Priorités et périmètre proposés',
      'Recommandations actionnables',
    ],
    footnote: 'HT, selon périmètre. Le devis précise.',
  },
  {
    id: 'site',
    index: '02',
    title: 'Site web',
    teaser: true,
    range: 'À partir de 1 500 €',
    period: '',
    summary:
      'Création ou refonte : présenter l’activité, rester clair sur téléphone. Le départ couvre le socle ; les options s’ajoutent.',
    deliverables: [
      'Site vitrine ou refonte, adapté au mobile',
      'Pages essentielles pour présenter l’activité',
      'Mise en ligne',
    ],
    extras: [
      { label: 'Formulaire (contact, devis, inscription)', price: 'à partir de 250 € HT' },
      { label: 'Blog', price: 'à partir de 400 € HT' },
      { label: 'Espace pour modifier textes et images', price: 'à partir de 350 € HT' },
      { label: 'Page supplémentaire', price: 'à partir de 150 € HT / page' },
      { label: 'Version dans une autre langue', price: 'à partir de 400 € HT' },
      { label: 'Prise de rendez-vous en ligne', price: 'à partir de 500 € HT' },
    ],
    teaserNote: 'Options : blog, formulaire…',
    footnote: 'HT. Options en plus du départ. Le devis précise.',
  },
  {
    id: 'webapp',
    index: '03',
    title: 'Application web',
    teaser: true,
    range: 'À partir de 4 000 €',
    period: '',
    summary:
      'Un premier outil métier ou un produit en ligne. Le départ couvre le socle ; les options et le suivi long terme s’ajoutent.',
    deliverables: [
      'Cadrage des usages et du parcours',
      'Développement frontend / backend selon le besoin',
      'Mises en ligne successives, avec vous',
    ],
    extras: [
      { label: 'Comptes et connexion (identifiants, rôles)', price: 'à partir de 1 200 € HT' },
      { label: 'Tableau de bord / administration', price: 'à partir de 1 500 € HT' },
      { label: 'Paiement en ligne', price: 'à partir de 1 800 € HT' },
      { label: 'Espace client ou espace équipe', price: 'à partir de 2 000 € HT' },
      { label: 'Lien avec un outil existant (CRM, stock, etc.)', price: 'à partir de 1 500 € HT' },
      { label: 'Projet long terme (selon complexité)', price: '450 € HT / jour' },
    ],
    teaserNote: 'Options : comptes, paiement, TJM…',
    footnote: 'HT. Options en plus du départ. Le devis précise.',
  },
  {
    id: 'mobile',
    index: '04',
    title: 'Application mobile',
    teaser: true,
    range: 'À partir de 6 000 €',
    period: '',
    summary:
      'Une application dans la poche de vos clients ou de vos équipes. Même principe que l’app web, avec un départ plus haut.',
    deliverables: [
      'Parcours pensé pour le téléphone',
      'Identité et expérience travaillées',
      'App (iOS / Android) à partir de l’usage réel',
    ],
    extras: [
      { label: 'Comptes et connexion', price: 'à partir de 1 500 € HT' },
      { label: 'Notifications', price: 'à partir de 800 € HT' },
      { label: 'Publication App Store / Google Play', price: 'à partir de 600 € HT' },
      { label: 'Paiement in-app', price: 'à partir de 2 000 € HT' },
      { label: 'Lien avec une app web existante', price: 'à partir de 1 800 € HT' },
      { label: 'Projet long terme (selon complexité)', price: '450 € HT / jour' },
    ],
    teaserNote: 'Options : stores, notifications, TJM…',
    footnote: 'HT. Options en plus du départ. Le devis précise.',
  },
  {
    id: 'suivi',
    index: '05',
    title: 'Suivi',
    teaser: false,
    range: '90 – 250 €',
    period: '/ mois',
    summary: 'Après la mise en ligne : correctifs, mises à jour, petites évolutions.',
    deliverables: [
      'Correctifs et mises à jour',
      'Petites évolutions convenues',
      'Un interlocuteur identifié',
    ],
    footnote: 'HT, selon périmètre. Le devis précise.',
  },
];

export const TEASER_PACKS = PACKS.filter((pack) => pack.teaser);

export const PACK_IDS = PACKS.map((pack) => pack.id);

export const BUDGET_OPTIONS = [
  'À partir de 400 € HT',
  'À partir de 1 500 € HT',
  'À partir de 4 000 € HT',
  'À partir de 6 000 € HT',
  'À partir de 15 000 € HT',
  'Plus de 15 000 € HT',
  'Je ne sais pas encore',
];

export const PROJECT_TYPE_OPTIONS = [
  { value: 'creation', label: 'Création' },
  { value: 'refonte', label: 'Refonte' },
  { value: 'existant', label: 'J’ai déjà un outil / un site' },
];

export const GOAL_OPTIONS = [
  'Être visible et clair en ligne',
  'Recevoir plus de demandes',
  'Un outil pour mes équipes',
  'Une app pour mes clients',
  'Faire le point avant de décider',
  'Autre',
];

export const TIMELINE_OPTIONS = [
  'Dès que possible',
  '1 à 2 mois',
  '3 à 6 mois',
  'Plus de 6 mois',
  'Pas de délai précis',
];

export const FAQ = [
  {
    question: 'Combien de temps pour un site ou une app ?',
    answer:
      'Un site vitrine se compte souvent en semaines une fois le cadrage posé. Une application web ou mobile se découpe en étapes : on avance par livrables validés, plutôt que de tout livrer d’un coup. Le délai réel dépend du périmètre — le devis le précise.',
  },
  {
    question: 'Le « à partir de », c’est tout compris ?',
    answer:
      'Non. Pour un site, 1 500 € HT c’est le socle (vitrine, pages essentielles, mobile, mise en ligne). Blog, formulaire, autre langue, etc. s’ajoutent. Pour une app, 4 000 € HT (web) ou 6 000 € HT (mobile) c’est le départ ; comptes, paiement, stores, etc. s’ajoutent. Un projet long terme se facture à 450 € HT / jour, selon la complexité. Le devis fige ce qui est inclus.',
  },
  {
    question: 'Vous travaillez aussi la refonte d’un site existant ?',
    answer:
      'Oui. On part de ce qui existe déjà (WordPress ou autre), on clarifie ce qui bloque, puis on reconstruit ce qui doit l’être — sans tout casser pour le plaisir.',
  },
  {
    question: 'Que se passe-t-il après la mise en ligne ?',
    answer:
      'On vérifie, on corrige, et on peut enchaîner sur un suivi mensuel (mises à jour, petites évolutions). Sans suivi, le site ou l’outil reste le vôtre : on vous explique comment le faire vivre.',
  },
  {
    question: 'Un seul interlocuteur, vraiment ?',
    answer:
      'Oui. Du premier échange à la mise en ligne, vous parlez à la même personne. Pas de chef de projet d’un côté et d’un développeur inaccessible de l’autre.',
  },
  {
    question: 'Faut-il un cahier des charges avant de vous écrire ?',
    answer:
      'Non. Un message ou un devis suffit pour démarrer. Si besoin, l’audit / cadrage sert à poser le périmètre. S’il débouche sur un projet, son montant peut être déduit de la réalisation.',
  },
];

export function getPackById(id) {
  return PACKS.find((pack) => pack.id === id) || null;
}

export function devisHref(packId) {
  if (packId && PACK_IDS.includes(packId)) {
    return `/contact?tab=devis&pack=${packId}`;
  }
  return '/contact?tab=devis';
}

export function formatPackRange(pack) {
  if (!pack) {
    return '';
  }
  const period = pack.period ? ` ${pack.period}` : '';
  return `${pack.range} HT${period}`;
}
