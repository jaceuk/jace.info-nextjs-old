import Head from 'next/head';
import Blog from '@modules/Blog';
import Layout from '@components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason Newington - Devleoper, designer, mentor</title>
      </Head>

      <Layout>
        <Blog />
      </Layout>
    </>
  );
}
