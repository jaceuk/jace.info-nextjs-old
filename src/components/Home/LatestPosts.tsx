import Link from 'next/link';
import Card from '@components/Card';
import CardGrid from '@components/CardGrid';
import InnerWrapper from '@components/InnerWrapper';
import BlogPostsTitle from './BlogPostsTitle';
import IconLink from '@components/IconLink';
import { ArrowRight } from 'iconoir-react';

interface Props {
  latestPostsData: PostData[];
}

interface PostData {
  slug: string;
  excerpt: string;
  title: string;
}

export default function LatestPosts({ latestPostsData }: Props) {
  return (
    <section className="section">
      <InnerWrapper>
        <BlogPostsTitle />

        <CardGrid>
          {latestPostsData.map(({ slug, excerpt, title }: PostData) => (
            <Card key={slug}>
              <h2>
                <Link href={`/blog/${slug}`}>
                  <a>{title}</a>
                </Link>
              </h2>
              <p>{excerpt}</p>
              <Link href={`/blog/${slug}`}>
                <a>
                  <IconLink>
                    Read more
                    <ArrowRight />
                  </IconLink>
                </a>
              </Link>
            </Card>
          ))}
        </CardGrid>
      </InnerWrapper>
    </section>
  );
}
