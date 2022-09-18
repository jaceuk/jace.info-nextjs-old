import styles from './IconLink.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function IconLink({ children }: Props) {
  return <div className={styles.link}>{children}</div>;
}
