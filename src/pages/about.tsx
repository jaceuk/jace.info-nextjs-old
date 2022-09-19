import Head from 'next/head';
import About from 'src/components/About';
import Layout from '@components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason Newington - Devleoper, designer, mentor</title>
      </Head>

      <Layout>
        <About />
      </Layout>
    </>
  );
}
