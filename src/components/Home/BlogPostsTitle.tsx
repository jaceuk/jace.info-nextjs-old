import IconLink from '@components/IconLink';
import { ArrowRight } from 'iconoir-react';
import Link from 'next/link';
import styles from './BlogPostsTitle.module.scss';

export default function BlogPostsTitle() {
  return (
    <div className={styles.sectionTitle}>
      <h2 className="h4">Latest blog posts</h2>
      <Link href="/blog">
        <a>
          <IconLink>
            All blog posts
            <ArrowRight />
          </IconLink>
        </a>
      </Link>
    </div>
  );
}
