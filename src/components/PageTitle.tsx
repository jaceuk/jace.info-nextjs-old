import InnerWrapper from '@components/InnerWrapper';

interface Props {
  title: string;
}

export default function PageTitle({ title }: Props) {
  return (
    <div className="section">
      <InnerWrapper>
        <h1 className="h2">{title}</h1>
      </InnerWrapper>
    </div>
  );
}
