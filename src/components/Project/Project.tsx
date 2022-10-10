import InnerWrapper from '@components/InnerWrapper';
import Image from 'next/image';
import styles from './Project.module.scss';

interface Props {
  data: {
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

export default function Project({ data }: Props) {
  return (
    <>
      <section className="section">
        <InnerWrapper>
          <div className={styles.intro}>
            <div className={styles.image}>
              <Image src={`/assets/images/${data.slug}.jpg`} alt="" layout="fill" objectFit="cover" />
            </div>

            <div className={styles.text}>
              <h2>Overview</h2>
              <div className="markdown" dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
            </div>
          </div>
        </InnerWrapper>
      </section>

      <section className="section">
        <InnerWrapper>test</InnerWrapper>
      </section>
    </>
  );
}
