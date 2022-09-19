import InnerWrapper from '@components/InnerWrapper';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <InnerWrapper>&copy; 2022 Jason Newington</InnerWrapper>
    </footer>
  );
}
