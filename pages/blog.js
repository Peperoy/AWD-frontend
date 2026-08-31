import BlogPage from '../components/BlogPage';
import { getPublishedArticles } from '../lib/notion';

export default function Blog({ articles }) {
  return <BlogPage articles={articles} />;
}

export async function getStaticProps() {
  const articles = await getPublishedArticles();
  return {
    props: { articles },
    revalidate: 60,
  };
}
