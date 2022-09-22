import Head from 'next/head';
import { getSortedData } from '@lib/posts';
import BlogPosts from '@components/Blog/BlogPosts';
import Layout from '@components/Layout';
import PageTitle from '@components/PageTitle';

interface Props {
  data: Data[];
}

interface Data {
  slug: string;
  excerpt: string;
  title: string;
  tags: string[];
}

export async function getStaticProps() {
  const data = getSortedData();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }: Props) {
  return (
    <>
      <Head>
        <title>Jason Newington - Devleoper, designer, mentor</title>
      </Head>

      <Layout>
        <PageTitle title="Blog posts" />
        <BlogPosts data={data} />
      </Layout>
    </>
  );
}
