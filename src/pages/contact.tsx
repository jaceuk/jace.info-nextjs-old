import Head from 'next/head';
import Contact from '@components/Contact';
import Layout from '@components/Layout';
import PageTitle from '@components/PageTitle';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason Newington - Devleoper, designer, mentor</title>
      </Head>

      <Layout>
        <PageTitle title="Contact me" />
        <Contact />
      </Layout>
    </>
  );
}
