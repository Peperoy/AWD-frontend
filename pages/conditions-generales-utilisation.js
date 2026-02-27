import LegalPageLayout from '../components/LegalPageLayout';
import Link from 'next/link';

export default function ConditionsGeneralesUtilisation() {
  return (
    <LegalPageLayout
      title="Conditions générales d'utilisation"
      description="Conditions générales d'utilisation du site Atlas Web Development."
    >
      <h1>Conditions générales d&apos;utilisation</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Les présentes conditions générales d&apos;utilisation (CGU) s&apos;appliquent à l&apos;accès
        et à l&apos;utilisation du site d&apos;Atlas Web Development, édité par Henri De Boever (entrepreneur
        individuel, micro-entreprise). En accédant au site, l&apos;utilisateur accepte les présentes CGU.
      </p>

      <h2>1. Objet et acceptation</h2>
      <p>
        Le site a pour objet de présenter les services d&apos;Atlas Web Development et de permettre aux
        visiteurs de prendre contact avec l&apos;éditeur. L&apos;utilisation du site implique
        l&apos;acceptation sans réserve des présentes conditions. Si l&apos;utilisateur n&apos;accepte
        pas ces conditions, il est invité à ne pas utiliser le site.
      </p>

      <h2>2. Accès au site</h2>
      <p>
        L&apos;éditeur s&apos;efforce d&apos;assurer l&apos;accessibilité du site 24 h sur 24 et 7 j sur 7,
        sans pouvoir toutefois garantir une disponibilité ininterrompue. L&apos;accès peut être
        suspendu pour des raisons de maintenance, de mise à jour ou de force majeure. L&apos;utilisateur
        reconnaît disposer de la compétence et des moyens nécessaires pour accéder au site et utiliser
        ses fonctionnalités.
      </p>

      <h2>3. Utilisation du site</h2>
      <p>
        L&apos;utilisateur s&apos;engage à utiliser le site conformément aux lois et règlements en
        vigueur et aux présentes CGU. Il s&apos;interdit notamment de :
      </p>
      <ul>
        <li>Utiliser le site à des fins illicites, contraires à l&apos;ordre public ou aux bonnes mœurs ;</li>
        <li>Porter atteinte aux droits de tiers (notamment propriété intellectuelle, vie privée) ;</li>
        <li>Introduire des virus, logiciels malveillants ou tout contenu susceptible de nuire au site ou à ses utilisateurs ;</li>
        <li>Tenter d&apos;accéder de manière non autorisée à des zones restreintes ou à des données d&apos;autres utilisateurs.</li>
      </ul>
      <p>
        En cas de manquement, l&apos;éditeur se réserve le droit de restreindre ou de suspendre
        l&apos;accès au site sans préavis.
      </p>

      <h2>4. Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des éléments du site (structure, textes, images, logos, etc.) est protégé par
        le droit d&apos;auteur et le droit des marques. Toute reproduction, représentation ou
        exploitation non autorisée peut constituer une contrefaçon. Pour toute demande d&apos;autorisation,
        contactez l&apos;éditeur aux coordonnées indiquées dans les{' '}
        <Link href="/mentions-legales">mentions légales</Link>.
      </p>

      <h2>5. Données personnelles et cookies</h2>
      <p>
        Les traitements de données personnelles et l&apos;utilisation des cookies sont régis par la{' '}
        <Link href="/politique-confidentialite">Politique de confidentialité</Link> et la{' '}
        <Link href="/cookies">Politique des cookies</Link>. En utilisant le site, l&apos;utilisateur
        reconnaît avoir pris connaissance de ces documents.
      </p>

      <h2>6. Liens hypertextes</h2>
      <p>
        Le site peut contenir des liens vers des sites tiers. L&apos;éditeur n&apos;exerce aucun
        contrôle sur ces sites et décline toute responsabilité quant à leur contenu. La création de
        liens vers le présent site est soumise à l&apos;accord préalable de l&apos;éditeur.
      </p>

      <h2>7. Limitation de responsabilité</h2>
      <p>
        L&apos;éditeur met en œuvre des moyens raisonnables pour assurer l&apos;exactitude et la mise à
        jour des informations publiées. Toutefois, il ne peut en garantir l&apos;exhaustivité ou
        l&apos;absence d&apos;erreur. Les informations sont fournies à titre indicatif. L&apos;éditeur
        ne peut être tenu responsable des dommages directs ou indirects résultant de l&apos;accès ou
        de l&apos;utilisation du site, dans les limites autorisées par la loi.
      </p>

      <h2>8. Droit applicable et litiges</h2>
      <p>
        Les présentes CGU sont régies par le droit français. En cas de litige, et à défaut de
        résolution amiable, les tribunaux français seront seuls compétents.
      </p>

      <h2>9. Modifications</h2>
      <p>
        L&apos;éditeur se réserve le droit de modifier les présentes CGU à tout moment. Les
        modifications prennent effet dès leur publication sur cette page. Il appartient à
        l&apos;utilisateur de les consulter régulièrement.
      </p>

      <p className="text-sm text-slate-500 dark:text-slate-400 mt-8">
        Dernière mise à jour : février 2026. Pour toute question : deboeverhenri@gmail.com ou 07 80 41 39 66.
      </p>
    </LegalPageLayout>
  );
}
