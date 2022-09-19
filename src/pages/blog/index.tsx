import Head from 'next/head';
import { getSortedPostsData } from '@lib/posts';
import BlogPosts from '@components/Blog/BlogPosts';
import Layout from '@components/Layout';
import PageTitle from '@components/PageTitle';

interface Props {
  allPostsData: PostData[];
}

interface PostData {
  slug: string;
  excerpt: string;
  title: string;
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
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
        <PageTitle title="Blog posts" />
        <BlogPosts allPostsData={allPostsData} />
      </Layout>
    </>
  );
}
