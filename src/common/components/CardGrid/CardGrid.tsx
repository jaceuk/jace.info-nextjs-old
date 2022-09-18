import styles from './CardGrid.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function CardGrid({ children }: Props) {
  return <div className={styles.grid}>{children}</div>;
}
