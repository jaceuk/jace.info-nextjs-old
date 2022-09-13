import Head from 'next/head';
import HomePage from '@modules/Home';
import Layout from '@components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Seen Machine</title>
      </Head>

      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}
