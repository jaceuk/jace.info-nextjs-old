import Card from '@components/Card';
import CardGrid from '@components/CardGrid';
import IconLink from '@components/IconLink';
import InnerWrapper from '@components/InnerWrapper';
import { ArrowRight } from 'iconoir-react';
import Link from 'next/link';
import homeAbout from '@content/homeAbout.json';

export default function About() {
  return (
    <section className="section solid-background">
      <InnerWrapper>
        <CardGrid>
          {homeAbout.map((section) => (
            <Card key={section.title}>
              <h2>
                <Link href={section.link}>
                  <a>{section.title}</a>
                </Link>
              </h2>
              <p>{section.text}</p>
              <Link href={section.link}>
                <a>
                  <IconLink>
                    Read more
                    <ArrowRight />
                  </IconLink>
                </a>
              </Link>
            </Card>
          ))}
        </CardGrid>
      </InnerWrapper>
    </section>
  );
}
