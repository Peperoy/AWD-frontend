import Head from 'next/head';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import BlogCover from './BlogCover';
import { formatArticleDate } from '../lib/dates';
import { SITE_NAME, SITE_URL } from '../lib/site';

export default function BlogPage({ articles }) {
  const canonical = `${SITE_URL}/blog`;
  const description =
    'Articles d’Atlas Web Development : sites internet, applications web et mobiles, pour les PME, indépendants et commerces locaux.';

  return (
    <>
      <Head>
        <title>Blog | {SITE_NAME}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`Blog | ${SITE_NAME}`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
      </Head>
      <div className="font-body bg-background text-ink antialiased atlas-grid min-h-screen">
        <Navbar activePage="blog" />
        <main>
          <section className="relative overflow-hidden border-b border-ink/10">
            <div className="atlas-glow pointer-events-none absolute inset-0" aria-hidden />
            <div className="relative mx-auto w-full max-w-atlas px-5 py-16 md:px-16 md:py-20">
              <p className="label-caps mb-3">Blog</p>
              <span className="gold-rule mb-6" aria-hidden />
              <h1 className="font-display text-display-md uppercase break-words min-w-0">
                Notes
                <br />
                &amp; méthodes
              </h1>
              <p className="lead-wrap mt-8 text-lg text-muted leading-relaxed">
                Sites, applications web et mobiles : ce qu’il faut vraiment construire
                pour une entreprise locale.
              </p>
            </div>
          </section>
          <section className="border-b border-ink/10">
            {articles.length === 0 ? (
              <div className="mx-auto max-w-atlas px-5 md:px-16 py-16">
                <p className="text-muted text-lg leading-relaxed max-w-2xl">
                  Bientôt des articles.
                </p>
              </div>
            ) : (
              <ul>
                {articles.map((article, index) => (
                  <li key={article.id} className="border-b border-ink/10 last:border-b-0">
                    <Link href={`/blog/${article.slug}`}>
                      <a className="group relative mx-auto max-w-atlas px-5 md:px-16 py-12 md:py-16 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                        <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                          <BlogCover
                            pillar={article.pillar}
                            index={articles.length - index}
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="label-caps mb-3">
                            {article.pillar || 'Article'}
                          </p>
                          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight group-hover:text-gold transition-colors break-words">
                            {article.title}
                          </h2>
                          {article.excerpt ? (
                            <p className="mt-4 text-muted leading-relaxed max-w-md">
                              {article.excerpt}
                            </p>
                          ) : null}
                          <span className="mt-6 inline-flex items-center gap-3">
                            {article.publishedAt ? (
                              <time
                                dateTime={article.publishedAt}
                                className="font-label text-[11px] font-bold uppercase tracking-[0.16em] text-gold"
                              >
                                {formatArticleDate(article.publishedAt)}
                              </time>
                            ) : null}
                            <span className="font-label text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
                              Lire
                              <span aria-hidden> →</span>
                            </span>
                          </span>
                        </div>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
