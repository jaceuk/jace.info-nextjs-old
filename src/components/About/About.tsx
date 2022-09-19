import InnerWrapper from '@components/InnerWrapper';
import styles from './About.module.scss';

export default function About() {
  return (
    <>
      <section>
        <InnerWrapper>
          <h1 className="h2">Hi, I&apos;m Jason Newington</h1>
        </InnerWrapper>
      </section>

      <section>
        <InnerWrapper>About</InnerWrapper>
      </section>
    </>
  );
}
