import Head from 'next/head';
import Layout from '@components/Layout';
import { getSortedData } from '@lib/projects';
import Hero from '@components/Home/Hero';
import About from '@components/Home/About';
import LatestPosts from '@components/Home/LatestPosts';

interface Props {
  postsData: PostData[];
}

interface PostData {
  slug: string;
  excerpt: string;
  title: string;
  tags: string[];
}

export async function getStaticProps() {
  const allPostsData = getSortedData();
  const numberOfPostsToShow = 4;
  const postsData = allPostsData.slice(0, numberOfPostsToShow);
  return {
    props: {
      postsData,
    },
  };
}

export default function Home({ postsData }: Props) {
  return (
    <>
      <Head>
        <title>Jason Newington - Devleoper, designer, mentor</title>
      </Head>

      <Layout>
        <Hero />
        <About />
        <LatestPosts postsData={postsData} />
      </Layout>
    </>
  );
}
