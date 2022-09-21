import Image from 'next/image';
import InnerWrapper from '@components/InnerWrapper';
import Duck from '@images/duck.jpg';
import heroText from '@content/heroText.json';

export default function Hero() {
  return (
    <div className="section hero-section">
      <InnerWrapper>
        <div className="hero">
          <div className="image">
            <Image src={Duck} alt="" />
          </div>

          <div>
            <div className="subtitle">{heroText[0].text}</div>
            <h1>{heroText[1].text}</h1>
            <div className="subtitle">{heroText[2].text}</div>
          </div>
        </div>
      </InnerWrapper>
    </div>
  );
}
