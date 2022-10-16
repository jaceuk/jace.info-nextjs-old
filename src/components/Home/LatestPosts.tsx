import Link from 'next/link';
import Card from '@components/Card';
import CardGrid from '@components/CardGrid';
import InnerWrapper from '@components/InnerWrapper';
import BlogPostsTitle from './BlogPostsTitle';
import ReadMore from '@components/ReadMore';
import Tag from '@components/Tag';
import Tags from '@components/Tags';

interface Props {
  posts: Post[];
}

interface Post {
  slug: string;
  excerpt: string;
  title: string;
  tags: string[];
  date: string;
}

export default function LatestPosts({ posts }: Props) {
  return (
    <section className="section">
      <InnerWrapper>
        <BlogPostsTitle />

        <CardGrid>
          {posts.map(({ slug, excerpt, title, tags }: Post) => (
            <Card key={slug}>
              <h2 className="h3">
                <Link href={`/blog/${slug}`}>
                  <a>{title}</a>
                </Link>
              </h2>

              {tags && (
                <Tags>
                  {tags.map((tag) => (
                    <Link href={`/blog/tag/${tag}`} key={tag}>
                      <a>
                        <Tag tag={tag} />
                      </a>
                    </Link>
                  ))}
                </Tags>
              )}

              <p>{excerpt}</p>
              <ReadMore href={`/blog/${slug}`} />
            </Card>
          ))}
        </CardGrid>
      </InnerWrapper>
    </section>
  );
}
