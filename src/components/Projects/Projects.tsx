import Image from 'next/image';
import Card from '@components/Card';
import IconLink from '@components/IconLink';
import InnerWrapper from '@components/InnerWrapper';
import { ArrowRight } from 'iconoir-react';
import Link from 'next/link';
import styles from './Projects.module.scss';
import projects from '@content/projects.json';

import dogsToAdoptImage from '@images/dogs-to-adopt.jpg';
import esoBuilderImage from '@images/eso-builder.jpg';
import evoHomeServicesImage from '@images/evo-home-services.jpg';
import vipDineImage from '@images/vip-dine.jpg';
import wakefieldSecurityImage from '@images/wakefield-security.jpg';

function getImage(slug: string) {
  if (slug === 'dogs-to-adopt') return dogsToAdoptImage;
  if (slug === 'eso-builder') return esoBuilderImage;
  if (slug === 'evo-home-services') return evoHomeServicesImage;
  if (slug === 'vip-dine') return vipDineImage;
  if (slug === 'wakefield-security') return wakefieldSecurityImage;
}

export default function Projects() {
  return (
    <>
      <section className="section">
        <InnerWrapper>
          <div className={styles.container}>
            {projects.map((project, index) => (
              <div key={project.title} className={styles.project}>
                <div className={styles.image}>
                  <Link href={`/project/${project.slug}`}>
                    <a>
                      <Image src={getImage(project.slug)} alt="" />
                    </a>
                  </Link>
                </div>

                <div className={styles.card}>
                  <Card>
                    <div className={styles.title}>
                      <div className={styles.type}>{project.type}</div>
                      <h2>
                        <Link href={`/project/${project.slug}`}>
                          <a>{project.title}</a>
                        </Link>
                      </h2>
                    </div>

                    <p>{project.text}</p>

                    <Link href={`/project/${project.slug}`}>
                      <a>
                        <IconLink>
                          Read more
                          <ArrowRight />
                        </IconLink>
                      </a>
                    </Link>
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
