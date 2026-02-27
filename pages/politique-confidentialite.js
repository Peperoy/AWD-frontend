import LegalPageLayout from '../components/LegalPageLayout';
import Link from 'next/link';

export default function PolitiqueConfidentialite() {
  return (
    <LegalPageLayout
      title="Politique de confidentialité"
      description="Politique de confidentialité et protection des données personnelles — RGPD."
    >
      <h1>Politique de confidentialité</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Cette politique décrit la manière dont Atlas Web Development (Henri De Boever, entrepreneur individuel)
        traite vos données personnelles, conformément au Règlement général sur la protection des données (RGPD)
        et à la loi Informatique et Libertés.
      </p>

      <h2>1. Responsable du traitement</h2>
      <p>
        Le responsable des traitements de données personnelles est Henri De Boever, exerçant sous le nom
        commercial Atlas Web Development, 53 RUE Charles Quint, 59300 Valenciennes, France. Pour toute
        question relative à vos données : deboeverhenri@gmail.com.
      </p>
      <p>
        Un délégué à la protection des données (DPO) peut être désigné ; le cas échéant, ses
        coordonnées seront indiquées ici ou communiquées sur demande.
      </p>

      <h2>2. Données collectées et finalités</h2>
      <p>Nous sommes susceptibles de collecter les données suivantes :</p>
      <ul>
        <li>
          <strong>Formulaire de contact :</strong> nom, prénom, adresse email, numéro de téléphone,
          message et toute information que vous choisissez de nous transmettre. Finalité : répondre
          à vos demandes et gérer la relation commerciale. Base légale : exécution de mesures
          précontractuelles / intérêt légitime (réponse aux sollicitations).
        </li>
        <li>
          <strong>Navigation :</strong> données techniques (adresse IP, type de navigateur, pages
          visitées) lorsque des traceurs sont utilisés, selon les choix que vous exprimez via notre
          dispositif de gestion des cookies. Finalités et bases légales sont détaillées dans notre{' '}
          <Link href="/cookies">politique des cookies</Link>.
        </li>
      </ul>
      <p>
        Les données sont collectées de manière minimale et pour des finalités déterminées, explicites
        et légitimes.
      </p>

      <h2>3. Destinataires des données</h2>
      <p>
        Les données sont accessibles au responsable (Henri De Boever / Atlas Web Development) et, le cas
        échéant, à des prestataires techniques (hébergement, envoi d’emails, outils de mesure
        d’audience si vous y consentez) qui agissent en tant que sous-traitants. Ces sous-traitants
        sont contractuellement tenus au respect de la confidentialité et de la sécurité des données.
      </p>
      <p>
        En cas de transfert de données hors de l’Union européenne, des garanties appropriées (clauses
        contractuelles types, décisions d’adéquation) sont mises en place. Vous pouvez nous demander
        une copie des garanties applicables.
      </p>

      <h2>4. Durée de conservation</h2>
      <p>
        Les données issues du formulaire de contact sont conservées pendant la durée nécessaire à la
        gestion de la relation (réponse, suivi commercial), puis archivées ou supprimées selon les
        obligations légales (ex. : 3 ans pour les prospects à compter du dernier contact, sauf
        consentement ou obligation légale différente). Les durées précises par type de traitement
        peuvent être communiquées sur demande.
      </p>

      <h2>5. Vos droits</h2>
      <p>Conformément au RGPD, vous disposez des droits suivants :</p>
      <ul>
        <li><strong>Droit d’accès</strong> : obtenir la confirmation que des données vous concernant sont traitées et en recevoir une copie.</li>
        <li><strong>Droit de rectification</strong> : faire corriger des données inexactes ou incomplètes.</li>
        <li><strong>Droit à l’effacement</strong> : demander la suppression de vos données dans les cas prévus par la loi.</li>
        <li><strong>Droit à la limitation du traitement</strong> : dans certaines conditions, demander que le traitement soit limité.</li>
        <li><strong>Droit d’opposition</strong> : vous opposer au traitement fondé sur l’intérêt légitime.</li>
        <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré et couramment utilisé (lorsque le traitement est basé sur le consentement ou le contrat).</li>
        <li><strong>Droit de retirer votre consentement</strong> : à tout moment, pour les traitements fondés sur le consentement, sans affecter la licéité du traitement antérieur.</li>
      </ul>
      <p>
        Pour exercer ces droits, contactez-nous à l’adresse : deboeverhenri@gmail.com ou 53 RUE Charles Quint,
        59300 Valenciennes, France. Nous
        vous répondrons dans le délai d’un mois. Vous avez également le droit d’introduire une
        réclamation auprès de la CNIL :{' '}
        <a
          href="https://www.cnil.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.cnil.fr
        </a>
        .
      </p>

      <h2>6. Sécurité</h2>
      <p>
        Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
        protéger vos données contre tout accès non autorisé, perte, altération ou destruction.
      </p>

      <p className="text-sm text-slate-500 dark:text-slate-400 mt-8">
        Dernière mise à jour : février 2026. Cette politique peut être modifiée ; la version en vigueur
        est celle publiée sur cette page.
      </p>
    </LegalPageLayout>
  );
}
