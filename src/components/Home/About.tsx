import Card from '@components/Card';
import CardGrid from '@components/CardGrid';
import IconLink from '@components/IconLink';
import InnerWrapper from '@components/InnerWrapper';
import { ArrowRight } from 'iconoir-react';
import Link from 'next/link';

export default function About() {
  return (
    <section className="section solid-background">
      <InnerWrapper>
        <CardGrid>
          <Card>
            <h2>
              <Link href="/about">
                <a>About me</a>
              </Link>
            </h2>
            <p>I&apos;m a Front End Developer with an eye for UX and a passion for accessibility and helping people.</p>
            <Link href="/about">
              <a>
                <IconLink>
                  Read more
                  <ArrowRight />
                </IconLink>
              </a>
            </Link>
          </Card>

          <Card>
            <h2>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </h2>
            <p>
              I&apos;ve lost count of the amount of projects I&apos;ve worked on but here are some examples of my more
              recent ones.
            </p>
            <Link href="/projects">
              <a>
                <IconLink>
                  Read more
                  <ArrowRight />
                </IconLink>
              </a>
            </Link>
          </Card>
        </CardGrid>
      </InnerWrapper>
    </section>
  );
}
