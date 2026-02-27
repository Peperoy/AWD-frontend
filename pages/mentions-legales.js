import LegalPageLayout from '../components/LegalPageLayout';
import Link from 'next/link';

export default function MentionsLegales() {
  return (
    <LegalPageLayout
      title="Mentions légales"
      description="Mentions légales du site Atlas Web Development — éditeur, hébergement, propriété intellectuelle."
    >
      <h1>Mentions légales</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Conformément à la loi pour la confiance dans l&apos;économie numérique (LCEN) du 21 juin 2004
        et à la loi n° 2024-449 du 21 mai 2024.
      </p>

      <h2>1. Éditeur du site</h2>
      <p>
        Le présent site est édité par <strong>Henri De Boever</strong>, entrepreneur individuel
        exerçant sous le nom commercial <strong>Atlas Web Development</strong> (micro-entreprise),
        dont le siège est situé au 53 RUE Charles Quint, 59300 Valenciennes, France.
      </p>
      <ul>
        <li>Numéro SIRET : 988 593 232 00016</li>
        <li>Immatriculé au RNE (Registre National des Entreprises), SIREN 988 593 232</li>
        <li>Franchise en base de TVA (article 293 B du CGI)</li>
        <li>Téléphone : 07 80 41 39 66</li>
        <li>Email : deboeverhenri@gmail.com</li>
      </ul>
      <p>
        <strong>Directeur de la publication :</strong> Henri De Boever
      </p>

      <h2>2. Hébergement du site internet</h2>
      <p>
        Conformément à la loi n° 2024-449, les coordonnées de l&apos;hébergeur des pages web du site
        sont les suivantes :
      </p>
      <ul>
        <li>Raison sociale : Vercel Inc.</li>
        <li>Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
        <li>Téléphone : +1 (559) 288-7060</li>
        <li>Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
      </ul>

      <h2>3. Hébergement des données</h2>
      <p>
        L&apos;hébergement du site et des données (formulaires, bases de données) est assuré par le
        même prestataire : <strong>Vercel Inc.</strong> (coordonnées identiques à la section 2).
      </p>

      <h2>4. Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, structure, etc.) est
        protégé par le droit d&apos;auteur et le droit des marques. Toute reproduction ou
        représentation non autorisée constitue une contrefaçon sanctionnée par le Code de propriété
        intellectuelle.
      </p>
      <p>
        Les images, illustrations et photographies dont la propriété revient à des tiers sont
        mentionnées comme telles. Pour les textes n&apos;appartenant pas à l&apos;éditeur,
        l&apos;autorisation de l&apos;auteur a été obtenue ou la source est citée.
      </p>

      <h2>5. Données personnelles et cookies</h2>
      <p>
        Les traitements de données personnelles et l&apos;utilisation de cookies sont décrits dans
        les pages dédiées. Nous vous invitons à les consulter :
      </p>
      <ul>
        <li>
          <Link href="/politique-confidentialite">Politique de confidentialité</Link>
        </li>
        <li>
          <Link href="/cookies">Politique des cookies et gestion des traceurs</Link>
        </li>
      </ul>

      <h2>6. Limitation de responsabilité</h2>
      <p>
        L&apos;éditeur s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
        informations diffusées sur ce site. Toutefois, il ne peut en garantir l&apos;exhaustivité.
        En cas de signalement de contenu illicite ou de dysfonctionnement, vous pouvez nous
        contacter aux coordonnées indiquées ci-dessus.
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-8">
        Dernière mise à jour : février 2026. Ces mentions peuvent être modifiées à tout moment ; la version
        en vigueur est celle publiée sur cette page.
      </p>
    </LegalPageLayout>
  );
}
