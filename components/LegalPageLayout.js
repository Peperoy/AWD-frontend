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
      <div className="font-body bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-6 py-16 max-w-3xl">
          <article className="prose prose-slate dark:prose-invert prose-headings:font-futuristic prose-headings:tracking-wide prose-a:text-primary-services prose-a:no-underline hover:prose-a:underline max-w-none">
            {children}
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
}
