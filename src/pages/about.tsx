import Head from 'next/head';
import About from 'src/components/About';
import Layout from '@components/Layout';
import PageTitle from '@components/PageTitle';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason Newington - Devleoper, designer, mentor</title>
      </Head>

      <Layout>
        <PageTitle title="Hi, I'm Jason Newington" />
        <About />
      </Layout>
    </>
  );
}
