import Layout from '@components/Layout';
import Head from 'next/head';
import PageTitle from '@components/PageTitle';
import Project from '@components/Project';
import { getAllPosts, getPostBySlug } from '@lib/posts';
import markdownToHtml from '@lib/markdownToHtml';

interface Props {
  post: {
    slug: string;
    excerpt: string;
    title: string;
    type: string;
    contentHtml: string;
    lighthouseScores: number[];
    primarySkills: string[];
    secondarySkills: string[];
    url: string;
  };
}

interface Params {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(
    params.slug,
    ['title', 'date', 'slug', 'content', 'primarySkills', 'secondarySkills', 'type', 'lighthouseScores', 'url'],
    'projects',
  );
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
  const posts = getAllPosts(['slug'], 'projects');

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

      <PageTitle title={post.title} preTitle={post.type} />

      <Project data={post} />
    </Layout>
  );
}
