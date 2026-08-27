import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function LegalPageLayout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title} | Atlas Web Development</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {description && <meta name="description" content={description} />}
      </Head>
      <div className="font-body bg-background text-ink antialiased min-h-screen flex flex-col atlas-grid">
        <Navbar />
        <main className="flex-1 mx-auto w-full max-w-3xl px-5 md:px-8 py-16">
          <p className="label-caps mb-4">Atlas / Légal</p>
          <article
            className="space-y-4 text-muted leading-relaxed
              [&_h1]:font-display [&_h1]:text-4xl [&_h1]:font-extrabold [&_h1]:uppercase [&_h1]:tracking-tight [&_h1]:text-ink [&_h1]:mb-6
              [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink [&_h2]:mt-10 [&_h2]:mb-3
              [&_a]:text-gold [&_a]:no-underline hover:[&_a]:underline
              [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1
              [&_strong]:text-ink"
          >
            {children}
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
}
