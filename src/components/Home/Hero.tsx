import Image from 'next/image';
import InnerWrapper from '@components/InnerWrapper';
import styles from './Hero.module.scss';
import Duck from '@images/duck.jpg';

export default function Hero() {
  return (
    <div className={`section ${styles.container}`}>
      <InnerWrapper>
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
      </InnerWrapper>
    </div>
  );
}
