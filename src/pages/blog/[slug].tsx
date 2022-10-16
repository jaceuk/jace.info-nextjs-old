import Layout from '@components/Layout';
import { getAllPosts, getPostBySlug } from '@lib/posts';
import Head from 'next/head';
import InnerWrapper from '@components/InnerWrapper';
import PageTitle from '@components/PageTitle';
import markdownToHtml from '@lib/markdownToHtml';

interface Props {
  post: {
    slug: string;
    date: string;
    title: string;
    content: string;
    tags: string[];
  };
}

interface Params {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content', 'tags'], 'blog');
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'], 'blog');

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default function Post({ post }: Props) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>

      <PageTitle title={post.title} />

      <main className="section">
        <InnerWrapper>
          <div className="markdown readable-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        </InnerWrapper>
      </main>
    </Layout>
  );
}
