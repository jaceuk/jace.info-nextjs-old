import Image from 'next/image';
import Card from '@components/Card';
import ReadMore from '@components/ReadMore';
import InnerWrapper from '@components/InnerWrapper';
import Link from 'next/link';
import styles from './Projects.module.scss';

interface Props {
  data: Data[];
}

interface Data {
  slug: string;
  excerpt: string;
  title: string;
  type: string;
}

export default function Projects({ data }: Props) {
  return (
    <>
      <section className="section">
        <InnerWrapper>
          <div className={styles.container}>
            <p className={styles.intro}>
              I’ve lost count of the amount of projects I’ve worked on but here are some examples of my more recent
              ones.
            </p>
            {data.map(({ slug, excerpt, title, type }: Data) => (
              <div key={slug} className={styles.project}>
                <div className={styles.image}>
                  <Link href={`/projects/${slug}`}>
                    <a>
                      <Image src={`/assets/images/${slug}.jpg`} alt="" layout="fill" objectFit="cover" />
                    </a>
                  </Link>
                </div>

                <div className={styles.card}>
                  <Card>
                    <div className={styles.title}>
                      <div className={styles.type}>{type}</div>
                      <h2>
                        <Link href={`/projects/${slug}`}>
                          <a>{title}</a>
                        </Link>
                      </h2>
                    </div>

                    <p>{excerpt}</p>

                    <ReadMore href={`/projects/${slug}`} />
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </InnerWrapper>
      </section>
    </>
  );
}
