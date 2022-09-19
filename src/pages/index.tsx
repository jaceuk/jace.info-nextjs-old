import Head from 'next/head';
import Layout from '@components/Layout';
import { getSortedPostsData } from '@lib/posts';
import Hero from '@components/Home/Hero';
import About from '@components/Home/About';
import LatestPosts from '@components/Home/LatestPosts';

interface Props {
  latestPostsData: PostData[];
}

interface PostData {
  slug: string;
  excerpt: string;
  title: string;
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const numberOfPostsToShow = 4;
  const latestPostsData = allPostsData.slice(0, numberOfPostsToShow);
  return {
    props: {
      latestPostsData,
    },
  };
}

export default function Home({ latestPostsData }: Props) {
  return (
    <>
      <Head>
        <title>Jason Newington - Devleoper, designer, mentor</title>
      </Head>

      <Layout>
        <Hero />
        <About />
        <LatestPosts latestPostsData={latestPostsData} />
      </Layout>
    </>
  );
}
