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
import secondarySkills from '@content/secondarySkills';
import primarySkills from '@content/primarySkills';

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
                <h2 className="subtitle">Front end developer</h2>
                <p>
                  I&apos;m a passionate Front End Developer with <strong>over 20 years experience</strong> who focuses
                  on writing clean, reusable, standards compliant code with accessiblity and best practice firmly in
                  mind.
                </p>
                <p>
                  With over two decades of experience I&apos;ve worked with many technology stacks however my passion
                  has always been the front end and overall user experience.
                </p>
                <p>
                  I&apos;m strong proponent of accessiblity and will champion accessible solutions wherever possible.
                </p>

                <h2 className="subtitle">UX/UI designer</h2>
                <p>I&apos;ve got a keen interest in UX and design.</p>
                <p>
                  Whilst my career has been in development I&apos;ve always had a keen interest in design with a
                  particular passion for functional, user focussed experiences.
                </p>

                <h2 className="subtitle">Mentor</h2>
                <p>
                  I&apos;m passionate about making the web a better place for everyone and this starts with helping
                  other developers become the best they can be.
                </p>
                <p>
                  Helping others achieve their potential is highly rewarding and is the only true way to effect any
                  meanigful change.
                </p>

                <h2 className="subtitle">Accessibility advocate</h2>
                <p>
                  When I say I&apos;m passionate about making the web a better place for everyone I mean EVERYONE,
                  regardless of any disability.
                </p>
                <p>
                  I&apos;m an outspoken champion of accessiblity. Aside from being the right thing to do good
                  accessiblity typically leads to a better experience for everyone.
                </p>
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
