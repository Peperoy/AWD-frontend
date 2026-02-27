import LegalPageLayout from '../components/LegalPageLayout';
import Link from 'next/link';

export default function Cookies() {
  return (
    <LegalPageLayout
      title="Politique des cookies et gestion des traceurs"
      description="Information sur les cookies et traceurs utilisés sur le site, conformément à la CNIL et à la loi Informatique et Libertés."
    >
      <h1>Politique des cookies et gestion des traceurs</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Conformément à l’article 82 de la loi Informatique et Libertés et aux lignes directrices de
        la CNIL, cette page vous informe sur l’utilisation des cookies et traceurs sur ce site et
        sur la manière dont vous pouvez gérer vos choix.
      </p>

      <h2>1. Qu’est-ce qu’un cookie ou un traceur ?</h2>
      <p>
        Un cookie est un petit fichier déposé ou lu sur votre terminal (ordinateur, tablette,
        smartphone) lors de la visite d’un site. Le terme « traceur » recouvre les cookies et
        d’autres technologies (identifiants, stockage local, pixels, etc.) permettant de lire ou
        d’enregistrer des informations sur votre terminal.
      </p>

      <h2>2. Les types de traceurs utilisés</h2>

      <h3>Traceurs exemptés de consentement</h3>
      <p>
        Certains traceurs sont strictement nécessaires au fonctionnement du site ou à la fourniture
        d’un service que vous demandez (ex. : mémorisation de vos préférences d’affichage, sécurité,
        équilibrage de charge). Ils ne nécessitent pas votre consentement préalable. Les traitements
        de données associés restent soumis aux principes du RGPD (minimisation, sécurité,
        information).
      </p>
      <p>
        Sur ce site, nous utilisons notamment des traceurs techniques nécessaires au bon
        fonctionnement des pages et, le cas échéant, pour enregistrer votre choix en matière de
        cookies (bandeau de consentement).
      </p>

      <h3>Traceurs soumis au consentement</h3>
      <p>
        D’autres traceurs (mesure d’audience détaillée, publicité, partage sur les réseaux sociaux,
        etc.) ne sont déposés ou lus qu’avec votre consentement préalable. Vous pouvez accepter ou
        refuser ces catégories au moment de votre première visite (bandeau cookies) ou à tout moment
        via le lien de gestion des cookies en pied de page.
      </p>
      <p>
        La CNIL rappelle que « refuser les cookies doit être aussi simple qu’accepter » : vous
        pouvez refuser tout ou partie des traceurs non strictement nécessaires sans que l’accès au
        site en soit conditionné.
      </p>

      <h2>3. Liste des traceurs utilisés sur ce site</h2>
      <p>
        À ce jour, le site n’utilise que des traceurs strictement nécessaires à son fonctionnement :
      </p>
      <ul>
        <li>
          <strong>Cookies strictement nécessaires :</strong> mémorisation des préférences
          d’affichage et du bon fonctionnement des pages. Pas de consentement requis. Durée : session
          ou limitée.
        </li>
      </ul>
      <p>
        <strong>Mesure d’audience (si activée) :</strong> le site peut utiliser Google Analytics 4
        pour analyser la fréquentation (pages vues, provenance). Aucun cookie n’est déposé tant que
        vous n’avez pas donné votre consentement (Consent Mode). Consentement requis.
      </p>

      <h2>4. Gérer vos choix à tout moment</h2>
      <p>
        Vous pouvez à tout moment modifier vos préférences en matière de cookies :
      </p>
      <ul>
        <li>
          En cliquant sur le lien « Gestion des cookies » ou « Préférences cookies » présent en pied
          de page du site (à intégrer lorsque vous mettrez en place un bandeau ou une page de
          paramétrage).
        </li>
        <li>
          En configurant votre navigateur pour refuser ou supprimer les cookies. Les paramètres
          dépendent de chaque navigateur (ex. : Chrome, Firefox, Safari, Edge). Le refus de cookies
          peut toutefois limiter certaines fonctionnalités du site.
        </li>
      </ul>
      <p>
        Pour plus d’informations sur les cookies et traceurs :{' '}
        <a
          href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles"
          target="_blank"
          rel="noopener noreferrer"
        >
          CNIL – Cookies et traceurs
        </a>
        .
      </p>

      <h2>5. Responsable du traitement</h2>
      <p>
        Le responsable des traitements liés aux traceurs est Henri De Boever (Atlas Web Development).
        Pour toute question ou pour exercer vos droits (accès, rectification, opposition, etc.), consultez
        notre <Link href="/politique-confidentialite">Politique de confidentialité</Link> et les
        coordonnées qui y figurent (deboeverhenri@gmail.com).
      </p>

      <p className="text-sm text-slate-500 dark:text-slate-400 mt-8">
        Dernière mise à jour : février 2026. Cette politique peut être modifiée ; la version en vigueur
        est celle publiée sur cette page.
      </p>
    </LegalPageLayout>
  );
}
