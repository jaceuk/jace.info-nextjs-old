import Link from 'next/link';
import Card from '@components/Card';
import CardGrid from '@components/CardGrid';
import ReadMore from '@components/ReadMore';
import InnerWrapper from '@components/InnerWrapper';
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
              <ReadMore href={section.link} />
            </Card>
          ))}
        </CardGrid>
      </InnerWrapper>
    </section>
  );
}
