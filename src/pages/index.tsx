import Head from 'next/head';
import Layout from '@components/Layout';
import Hero from '@components/Home/Hero';
import About from '@components/Home/About';
import LatestPosts from '@components/Home/LatestPosts';
import { getAllPosts } from '@lib/posts';

interface Props {
  posts: Data[];
}

interface Data {
  slug: string;
  excerpt: string;
  title: string;
  tags: string[];
  date: string;
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'excerpt', 'slug', 'tags', 'date'], 'blog');
  const numberOfPostsToShow = 4;
  const posts = allPosts.slice(0, numberOfPostsToShow);

  return {
    props: { posts },
  };
};

export default function Home({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Jason Newington - Devleoper, designer, mentor</title>
      </Head>

      <Layout>
        <Hero />
        <About />
        <LatestPosts posts={posts} />
      </Layout>
    </>
  );
}
