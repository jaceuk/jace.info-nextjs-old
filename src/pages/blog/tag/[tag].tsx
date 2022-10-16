import Head from 'next/head';
import { getAllPosts, getTags } from '@lib/posts';
import BlogPosts from '@components/Blog/BlogPosts';
import Layout from '@components/Layout';
import PageTitle from '@components/PageTitle';
import { readableTags } from '@lib/constants';

interface Props {
  allPosts: Data[];
  tag: string;
}

interface Data {
  slug: string;
  excerpt: string;
  title: string;
  tags: string[];
  date: string;
}

interface Params {
  params: {
    tag: string;
  };
}

export const getStaticProps = async ({ params }: Params) => {
  const allPosts = getAllPosts(['title', 'excerpt', 'slug', 'tags', 'date'], 'blog', params.tag);

  return {
    props: { tag: params.tag, allPosts },
  };
};

export async function getStaticPaths() {
  const tags = await getTags();

  const paths = tags.map((tag: string) => ({
    params: {
      tag,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default function Home({ tag, allPosts }: Props) {
  return (
    <>
      <Head>
        <title>Jason Newington - Devleoper, designer, mentor</title>
      </Head>

      <Layout>
        <PageTitle title={`${readableTags[tag]} blog posts`} />
        <BlogPosts data={allPosts} />
      </Layout>
    </>
  );
}
