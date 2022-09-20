import Head from 'next/head';
import { getSortedPostsData } from '@lib/posts';
import BlogPosts from '@components/Blog/BlogPosts';
import Layout from '@components/Layout';
import PageTitle from '@components/PageTitle';

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
  const postsData = getSortedPostsData();
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
        <PageTitle title="Blog posts" />
        <BlogPosts postsData={postsData} />
      </Layout>
    </>
  );
}
