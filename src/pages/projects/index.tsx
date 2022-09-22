import Head from 'next/head';
import { getSortedData } from '@lib/projects';
import Projects from '@components/Projects';
import Layout from '@components/Layout';
import PageTitle from '@components/PageTitle';

interface Props {
  data: Data[];
}

interface Data {
  slug: string;
  excerpt: string;
  title: string;
  tags: string[];
}

export async function getStaticProps() {
  const data = getSortedData();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }: Props) {
  return (
    <>
      <Head>
        <title>Jason Newington - Devleoper, designer, mentor</title>
      </Head>

      <Layout>
        <PageTitle title="Example projects" />
        <Projects data={data} />
      </Layout>
    </>
  );
}
