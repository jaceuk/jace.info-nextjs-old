import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'iconoir-react';
import Card from '@components/Card';
import CardGrid from '@components/CardGrid';
import IconLink from '@components/IconLink';
import styles from './Home.module.scss';
import Duck from '@images/duck.jpg';

export default function Home() {
  return (
    <>
      <section className={styles.container}>
        <div className="inner">
          <div className={styles.hero}>
            <div className={styles.image}>
              <Image src={Duck} alt="" />
            </div>

            <div>
              <div className="subtitle">Hi!</div>
              <h1>I&apos;m Jason Newington</h1>
              <div className="subtitle">Helping to make the web a better place</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className="inner">
          <CardGrid>
            <Card>
              <h2>About me</h2>
              <p>
                I&apos;m a Front End Developer with an eye for UX and a passion for accessibility and helping people.
              </p>
              <Link href="">
                <a>
                  <IconLink>
                    Read more
                    <ArrowRight />
                  </IconLink>
                </a>
              </Link>
            </Card>

            <Card>
              <h2>Projects</h2>
              <p>
                I&apos;ve lost count of the amount of projects I&apos;ve worked on but here are some examples of my more
                recent ones.
              </p>
              <Link href="">
                <a>
                  <IconLink>
                    Read more
                    <ArrowRight />
                  </IconLink>
                </a>
              </Link>
            </Card>
          </CardGrid>
        </div>
      </section>

      <section>
        <div className="inner">
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
          <CardGrid>
            <Card>
              <h3>JavaScript APIs You Don’t Know About</h3>
              <p>
                Unique IDs are essential for writing accessible code and now, with React 18, things just got allot
                easier.
              </p>
              <Link href="">
                <a>
                  <IconLink>
                    Read more
                    <ArrowRight />
                  </IconLink>
                </a>
              </Link>
            </Card>

            <Card>
              <h3>JavaScript APIs You Don’t Know About</h3>
              <p>
                Unique IDs are essential for writing accessible code and now, with React 18, things just got allot
                easier.
              </p>
              <Link href="">
                <a>
                  <IconLink>
                    Read more
                    <ArrowRight />
                  </IconLink>
                </a>
              </Link>
            </Card>

            <Card>
              <h3>JavaScript APIs You Don’t Know About</h3>
              <p>
                Unique IDs are essential for writing accessible code and now, with React 18, things just got allot
                easier.
              </p>
              <Link href="">
                <a>
                  <IconLink>
                    Read more
                    <ArrowRight />
                  </IconLink>
                </a>
              </Link>
            </Card>

            <Card>
              <h3>Header 2</h3>
              <p>
                Unique IDs are essential for writing accessible code and now, with React 18, things just got allot
                easier.
              </p>
              <Link href="">
                <a>
                  <IconLink>
                    Read more
                    <ArrowRight />
                  </IconLink>
                </a>
              </Link>
            </Card>
          </CardGrid>
        </div>
      </section>
    </>
  );
}
