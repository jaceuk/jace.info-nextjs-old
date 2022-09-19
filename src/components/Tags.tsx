import styles from './Tags.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function Card({ children }: Props) {
  return <div className={styles.tags}>{children}</div>;
}
