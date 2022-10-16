import Head from 'next/head';
import { getAllPosts } from '@lib/posts';
import BlogPosts from '@components/Blog/BlogPosts';
import Layout from '@components/Layout';
import PageTitle from '@components/PageTitle';

interface Props {
  allPosts: Data[];
}

interface Data {
  slug: string;
  excerpt: string;
  title: string;
  tags: string[];
  date: string;
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'excerpt', 'slug', 'tags', 'date']);

  return {
    props: { allPosts },
  };
};

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default function Home({ allPosts }: Props) {
  return (
    <>
      <Head>
        <title>Jason Newington - Devleoper, designer, mentor</title>
      </Head>

      <Layout>
        <PageTitle title="Blog posts" />
        <BlogPosts data={allPosts} />
      </Layout>
    </>
  );
}
