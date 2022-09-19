import Link from 'next/link';
import Card from '@components/Card';
import CardGrid from '@components/CardGrid';
import InnerWrapper from '@components/InnerWrapper';
import BlogPostsTitle from './BlogPostsTitle';
import IconLink from '@components/IconLink';
import { ArrowRight } from 'iconoir-react';
import Tag from '@components/Tag';
import JavaScript from '@components/SVGs/JavaScript';
import React from '@components/SVGs/React';
import TagIcon from '@components/TagIcon';

interface Props {
  latestPostsData: PostData[];
}

interface PostData {
  slug: string;
  excerpt: string;
  title: string;
  tags: string[];
}

export default function LatestPosts({ latestPostsData }: Props) {
  return (
    <section className="section">
      <InnerWrapper>
        <BlogPostsTitle />

        <CardGrid>
          {latestPostsData.map(({ slug, excerpt, title, tags }: PostData) => (
            <Card key={slug}>
              <h2 className="h3">
                <Link href={`/blog/${slug}`}>
                  <a>{title}</a>
                </Link>
              </h2>

              {tags && (
                <div className="tags">
                  {tags.map((tag) => (
                    <Link href={`/blog/${slug}`} key={tag}>
                      <a>
                        <Tag tag={tag} />
                      </a>
                    </Link>
                  ))}
                </div>
              )}

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
