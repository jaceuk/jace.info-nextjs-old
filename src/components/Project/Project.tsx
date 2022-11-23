import * as React from 'react';
import Link from 'next/link';
import InnerWrapper from '@components/InnerWrapper';
import Image from 'next/image';
import Lighthouse from './Lighthouse';
import styles from './Project.module.scss';
import { ArrowDown, OpenNewWindow } from 'iconoir-react';

interface Props {
  data: {
    slug: string;
    excerpt: string;
    title: string;
    type: string;
    content: string;
    lighthouseScores: number[];
    primarySkills: string[];
    secondarySkills: string[];
    url: string;
  };
}

export default function Project({ data }: Props) {
  const [imageSize, setSmageSize] = React.useState({
    width: 1,
    height: 1,
  });

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
                <Link href="#screenshots">
                  <button className={styles.iconLink}>
                    View screenshots
                    <ArrowDown />
                  </button>
                </Link>

                {data.url && (
                  <Link href={data.url}>
                    <a target="_blank">
                      <div className={styles.iconLink}>
                        Visit live site
                        <OpenNewWindow />
                      </div>
                    </a>
                  </Link>
                )}
              </div>
            </div>

            <div className={styles.text}>
              <h2 className="h3">Overview</h2>
              <div className="markdown" dangerouslySetInnerHTML={{ __html: data.content }} />

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

      <section id="screenshots" className="section">
        <InnerWrapper>
          <div className={styles.screenshots}>
            <h2 className="h3">Screenshots</h2>
            <div className={styles.screenshot}>
              <Image
                src={`/assets/images/${data.slug}-screenshot.jpg`}
                alt=""
                layout="responsive"
                objectFit="cover"
                onLoadingComplete={(target) => {
                  setSmageSize({
                    width: target.naturalWidth,
                    height: target.naturalHeight,
                  });
                }}
                width={imageSize.width}
                height={imageSize.height}
              />
            </div>
          </div>
        </InnerWrapper>
      </section>
    </>
  );
}
