import Head from 'next/head';
import Projects from '@modules/Projects';
import Layout from '@components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason Newington - Devleoper, designer, mentor</title>
      </Head>

      <Layout>
        <Projects />
      </Layout>
    </>
  );
}
