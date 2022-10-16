import InnerWrapper from '@components/InnerWrapper';
import styles from './PageTitle.module.scss';

interface Props {
  title: string;
  preTitle?: string;
}

export default function PageTitle({ title, preTitle }: Props) {
  return (
    <div className="section">
      <InnerWrapper>
        {preTitle && <div className={styles.preTitle}>{preTitle}</div>}
        <h1 className="h2">{title}</h1>
      </InnerWrapper>
    </div>
  );
}
