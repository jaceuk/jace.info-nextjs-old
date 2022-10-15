import InnerWrapper from '@components/InnerWrapper';
import Image from 'next/image';
import Lighthouse from './Lighthouse';
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
            <div className={styles.imageContainer}>
              <div className={styles.image}>
                <Image src={`/assets/images/${data.slug}.jpg`} alt="" layout="fill" objectFit="cover" />
              </div>

              <div className={styles.links}>
                <a href="/">Screenshot</a>
                <a href="/">Live site</a>
              </div>
            </div>

            <div className={styles.text}>
              <h2>Overview</h2>
              <div className="markdown" dangerouslySetInnerHTML={{ __html: data.contentHtml }} />

              <h3>Skills used</h3>
              <div className={styles.skills}>
                {data.primarySkills.map((skill, index) => (
                  <p key={index} className={styles.skill}>
                    {skill}
                  </p>
                ))}
                {data.secondarySkills.map((skill, index) => (
                  <p key={index} className={styles.skill}>
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </InnerWrapper>
      </section>

      <section className="section">
        <InnerWrapper>
          <Lighthouse scores={data.lighthouseScores} />
        </InnerWrapper>
      </section>
    </>
  );
}
