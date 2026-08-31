import BlogArticlePage from '../../components/BlogArticlePage';
import { getArticleBlocks, getArticleBySlug, getPublishedArticles } from '../../lib/notion';

export default function BlogArticle({ article, blocks, index }) {
  return <BlogArticlePage article={article} blocks={blocks} index={index} />;
}

export async function getStaticPaths() {
  const articles = await getPublishedArticles();
  return {
    paths: articles.map((article) => ({ params: { slug: article.slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const article = await getArticleBySlug(params.slug);
  if (!article) {
    return { notFound: true, revalidate: 60 };
  }
  const [blocks, published] = await Promise.all([
    getArticleBlocks(article.id, { title: article.title }),
    getPublishedArticles(),
  ]);
  const position = published.findIndex((item) => item.slug === article.slug);
  return {
    props: {
      article,
      blocks,
      index: position >= 0 ? published.length - position : 1,
    },
    revalidate: 60,
  };
}
