import Head from 'next/head';
import Projects from '@components/Projects';
import Layout from '@components/Layout';
import PageTitle from '@components/PageTitle';
import { getAllPosts } from '@lib/posts';

interface Props {
  allPosts: Data[];
}

interface Data {
  slug: string;
  excerpt: string;
  title: string;
  type: string;
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'excerpt', 'slug', 'type'], 'projects');

  return {
    props: { allPosts },
  };
};

export default function Home({ allPosts }: Props) {
  return (
    <>
      <Head>
        <title>Jason Newington - Devleoper, designer, mentor</title>
      </Head>

      <Layout>
        <PageTitle title="Example projects" />
        <Projects data={allPosts} />
      </Layout>
    </>
  );
}
