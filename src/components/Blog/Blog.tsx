import InnerWrapper from '@components/InnerWrapper';
import styles from './Blog.module.scss';

export default function Blog() {
  return (
    <>
      <section>
        <InnerWrapper>
          <h1 className="h2">Blog posts</h1>
        </InnerWrapper>
      </section>

      <section>
        <InnerWrapper>Blog</InnerWrapper>
      </section>
    </>
  );
}
