import Layout from '@components/Layout';
import { getAllPostSlugs, getPostData } from '@lib/posts';
import Head from 'next/head';
import InnerWrapper from '@components/InnerWrapper';
import PageTitle from '@components/PageTitle';

interface IProps {
  postData: {
    slug: string;
    date: string;
    title: string;
    contentHtml: string;
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }: IProps) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <PageTitle title={postData.title} />

      <main className="section">
        <InnerWrapper>
          <div className="markdown" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </InnerWrapper>
      </main>
    </Layout>
  );
}
