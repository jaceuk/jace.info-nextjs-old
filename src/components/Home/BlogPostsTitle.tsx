import ReadMore from '@components/ReadMore';
import styles from './BlogPostsTitle.module.scss';

export default function BlogPostsTitle() {
  return (
    <div className={styles.title}>
      <h2 className="h4">Latest blog posts</h2>
      <ReadMore href="/blog" text="All blog posts" />
    </div>
  );
}
