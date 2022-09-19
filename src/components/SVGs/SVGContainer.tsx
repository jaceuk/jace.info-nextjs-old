import styles from './SVGContainer.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function SVGContainer({ children }: Props) {
  return <span className={styles.svgContainer}>{children}</span>;
}
