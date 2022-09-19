import Head from 'next/head';
import Layout from '@components/Layout';
import { getSortedPostsData } from '@lib/posts';
import Hero from '@components/Home/Hero';
import About from '@components/Home/About';
import LatestPosts from '@components/Home/LatestPosts';

interface Props {
  allPostsData: IPostData[];
}

interface IPostData {
  slug: string;
  excerpt: string;
  title: string;
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: Props) {
  return (
    <>
      <Head>
        <title>Jason Newington - Devleoper, designer, mentor</title>
      </Head>

      <Layout>
        <Hero />
        <About />
        <LatestPosts allPostsData={allPostsData} />
      </Layout>
    </>
  );
}
