import Head from 'next/head';
import Contact from '@components/Contact';
import Layout from '@components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason Newington - Devleoper, designer, mentor</title>
      </Head>

      <Layout>
        <Contact />
      </Layout>
    </>
  );
}
