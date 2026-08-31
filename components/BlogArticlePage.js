import Head from 'next/head';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import ProjectCta from './ProjectCta';
import BlogBlocks from './BlogBlocks';
import BlogCover from './BlogCover';
import { formatArticleDate } from '../lib/dates';
import { SITE_NAME, SITE_URL } from '../lib/site';

export default function BlogArticlePage({ article, blocks, index = 1 }) {
  const url = `${SITE_URL}/blog/${article.slug}`;
  const description = article.excerpt || article.title;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description,
    datePublished: article.publishedAt || undefined,
    author: {
      '@type': 'Person',
      name: 'Henri De Boever',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: url,
  };

  return (
    <>
      <Head>
        <title>
          {article.title} | {SITE_NAME}
        </title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="article:author" content="Henri De Boever" />
        {article.publishedAt ? (
          <meta property="article:published_time" content={article.publishedAt} />
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <div className="font-body bg-background text-ink antialiased atlas-grid min-h-screen">
        <Navbar activePage="blog" />
        <article>
          <header className="border-b border-ink/10">
            <div className="mx-auto max-w-atlas px-5 md:px-16 pt-10 md:pt-14">
              <p className="label-caps mb-6">
                <Link href="/blog">
                  <a className="hover:text-ink transition-colors">Blog</a>
                </Link>
                {article.pillar ? ` / ${article.pillar}` : ''}
              </p>
              <BlogCover pillar={article.pillar} index={index} wide />
              <div className="max-w-3xl py-10 md:py-14">
                <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight break-words min-w-0">
                  {article.title}
                </h1>
                {article.publishedAt ? (
                  <time
                    dateTime={article.publishedAt}
                    className="mt-5 block font-label text-[11px] font-bold uppercase tracking-[0.16em] text-gold"
                  >
                    {formatArticleDate(article.publishedAt)}
                  </time>
                ) : null}
                {article.excerpt ? (
                  <p className="mt-6 text-lg text-muted leading-relaxed">{article.excerpt}</p>
                ) : null}
              </div>
            </div>
          </header>
          <div className="mx-auto w-full max-w-3xl px-5 md:px-8 py-12 md:py-16">
            <BlogBlocks blocks={blocks} />
          </div>
        </article>
        <ProjectCta />
        <Footer />
      </div>
    </>
  );
}
