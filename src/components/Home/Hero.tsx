import Image from 'next/image';
import InnerWrapper from '@components/InnerWrapper';
import Duck from '@images/duck.jpg';

export default function Hero() {
  return (
    <div className="section hero-section">
      <InnerWrapper>
        <div className="hero">
          <div className="image">
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
