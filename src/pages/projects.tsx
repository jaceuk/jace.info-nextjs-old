import Head from 'next/head';
import Projects from '@components/Projects';
import Layout from '@components/Layout';
import PageTitle from '@components/PageTitle';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason Newington - Devleoper, designer, mentor</title>
      </Head>

      <Layout>
        <PageTitle title="Example projects" />
        <Projects />
      </Layout>
    </>
  );
}
