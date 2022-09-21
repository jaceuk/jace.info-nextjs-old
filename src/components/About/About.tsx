import Image from 'next/image';
import InnerWrapper from '@components/InnerWrapper';
import Duck from '@images/duck.jpg';
import Card from '@components/Card';
import CardGrid from '@components/CardGrid';
import SkillTitle from './SkillTitle';
import React from '@components/SVGs/React';
import JavaScript from '@components/SVGs/JavaScript';
import TypeScript from '@components/SVGs/TypeScript';
import CSS from '@components/SVGs/CSS';
import HTML from '@components/SVGs/HTML';
import Accessibility from '@components/SVGs/Accessibility';
import styles from './About.module.scss';
import secondarySkills from '@content/secondarySkills.json';
import primarySkills from '@content/primarySkills.json';
import about from '@content/about.json';

export default function About() {
  function getIcon(skill: string) {
    if (skill === 'Accessibility') return <Accessibility />;
    if (skill === 'HTML') return <HTML />;
    if (skill === 'CSS') return <CSS />;
    if (skill === 'React') return <React />;
    if (skill === 'JavaScript') return <JavaScript />;
    if (skill === 'TypeScript') return <TypeScript />;
  }

  return (
    <>
      <main>
        <section className="section">
          <InnerWrapper>
            <div className={styles.aboutContainer}>
              <div className={styles.aboutContent}>
                {about.map((section) => (
                  <>
                    <h2 key={section.title} className="subtitle">
                      {section.title}
                    </h2>
                    {section.text.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </>
                ))}
              </div>

              <div className="image">
                <Image src={Duck} alt="" />
              </div>
            </div>
          </InnerWrapper>
        </section>

        <section className="section">
          <InnerWrapper>
            <div className={styles.skillsContainer}>
              <h2 className="h4">Technical skills</h2>

              <p className={styles.aboutContent}>
                I&apos;m always playing with new technologies and frameworks but these represent my core front end
                technical skills.
              </p>

              <CardGrid>
                {primarySkills.map((skill) => (
                  <Card key={skill.title}>
                    <SkillTitle title={skill.title} icon={getIcon(skill.title)} />
                    {skill.text}
                  </Card>
                ))}
              </CardGrid>

              <div className={styles.aboutContent}>
                <p>I also have experience in a wide range of additional areas and technologies including:</p>
              </div>

              <div className={styles.moreSkills}>
                {secondarySkills.sort().map((skill) => (
                  <span key={skill} className={styles.skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </InnerWrapper>
        </section>
      </main>
    </>
  );
}
