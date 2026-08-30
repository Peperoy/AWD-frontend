import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactFormPanel from './ContactFormPanel';

export default function ContactPage() {
  const contactEmail =
    process.env.CONTACT_EMAIL ||
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
    'atlaswebdev.pro@gmail.com';

  return (
    <>
      <Head>
        <title>Contact | Atlas Web Development</title>
        <meta
          name="description"
          content="Parlez de votre projet : site internet, refonte, application web ou mobile. Réponse sous 24 à 48 heures. Atlas Web Development, Valenciennes."
        />
      </Head>
      <div className="font-body bg-background text-ink antialiased atlas-grid min-h-screen">
        <Navbar activePage="contact" />
        <main className="relative py-16 md:py-24">
          <div className="atlas-glow pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative mx-auto max-w-atlas px-5 md:px-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="min-w-0">
              <p className="label-caps mb-3">Contact</p>
              <span className="gold-rule mb-6" aria-hidden />
              <h1 className="font-display text-headline md:text-display-md uppercase mb-8 break-words min-w-0">
                Parlons
                <br />
                de votre
                <br />
                <span className="text-gold">projet</span>.
              </h1>
              <p className="text-lg text-muted leading-relaxed max-w-md mb-12">
                Un site, une application ou un produit digital. Un interlocuteur unique pour
                comprendre le besoin, structurer le projet et le réaliser.
              </p>
              <ul className="space-y-6 text-sm">
                <li>
                  <p className="label-caps mb-1">Email</p>
                  <a href={`mailto:${contactEmail}`} className="text-ink hover:text-gold">
                    {contactEmail}
                  </a>
                </li>
                <li>
                  <p className="label-caps mb-1">Réponse</p>
                  <p className="text-muted">24 à 48 heures</p>
                </li>
              </ul>
            </div>
            <div className="min-w-0">
              <ContactFormPanel />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
