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

export default function About() {
  return (
    <>
      <main>
        <section className="section">
          <InnerWrapper>
            <div className="about-container">
              <div className="about-content readable-content">
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
            <div className="skills-container">
              <h2 className="h4">Technical skills</h2>

              <p className="readable-content">
                I&apos;m always playing with new technologies and frameworks but these represent my core front end
                technical skills.
              </p>

              <CardGrid>
                <Card>
                  <SkillTitle>
                    <>
                      <Accessibility />
                      Accessibility
                    </>
                  </SkillTitle>
                  <p>
                    I&apos;m a big advocate of accessiblity and have a wide range of experience of producing accessible
                    websites and apps.
                  </p>
                </Card>

                <Card>
                  <SkillTitle>
                    <CSS />
                    CSS
                  </SkillTitle>
                  <p>
                    I&apos;ve worked with everything from plain CSS and SASS through to React with Styled Components and
                    CSS Modules.
                  </p>
                </Card>

                <Card>
                  <SkillTitle>
                    <HTML />
                    HTML
                  </SkillTitle>
                  <p>
                    I&apos;m intimately familiar with HTML, a skill that seems to have fallen by the wayside in the
                    abstracted world of front end frameworks.
                  </p>
                </Card>

                <Card>
                  <SkillTitle>
                    <JavaScript />
                    JavaScript
                  </SkillTitle>
                  <p>I&apos;ve worked with vanilla Javascript along with libraries such as jQuery.</p>
                </Card>

                <Card>
                  <SkillTitle>
                    <React />
                    React
                  </SkillTitle>
                  <p>
                    I&apos;ve worked extensively with ReactJS and various associated frameworks such as NextJS and
                    Gatsby.
                  </p>
                </Card>

                <Card>
                  <SkillTitle>
                    <TypeScript />
                    TypeScript
                  </SkillTitle>
                  <p>I&apos;ve been using TypeScript in pretty much every project.</p>
                </Card>
              </CardGrid>

              <p className="readable-content">
                I also have experience in a wide range of additional areas and technologies.
              </p>
            </div>
          </InnerWrapper>
        </section>
      </main>
    </>
  );
}
