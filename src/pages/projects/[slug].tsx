import Layout from '@components/Layout';
import { getAllSlugs, getData } from '@lib/projects';
import Head from 'next/head';
import InnerWrapper from '@components/InnerWrapper';
import PageTitle from '@components/PageTitle';
import Project from '@components/Project';

interface Props {
  data: {
    slug: string;
    type: string;
    date: string;
    title: string;
    contentHtml: string;
  };
}

export async function getStaticProps({ params }) {
  const data = await getData(params.slug);
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllSlugs();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ data }: Props) {
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>

      <PageTitle title={data.title} preTitle={data.type} />

      <Project data={data} />
    </Layout>
  );
}
