import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './MobileNav.module.scss';

export default function Overlay() {
  const router = useRouter();

  return (
    <div className={styles.overlay}>
      <nav className={styles.mobileNav}>
        <Link href="/">
          <a className={router.pathname === '/' ? styles.active : ''}>
            <div className={styles.text}>Home</div>
          </a>
        </Link>

        <Link href="/about">
          <a className={router.pathname === '/about' ? styles.active : ''}>
            <div className={styles.text}>About</div>
          </a>
        </Link>

        <Link href="/projects">
          <a className={router.pathname === '/projects' ? styles.active : ''}>
            <div className={styles.text}>Projects</div>
          </a>
        </Link>

        <Link href="/blog">
          <a className={router.pathname.includes('/blog') ? styles.active : ''}>
            <div className={styles.text}>Blog</div>
          </a>
        </Link>

        <Link href="/contact">
          <a className={router.pathname === '/contact' ? styles.active : ''}>
            <div className={styles.text}>Contact</div>
          </a>
        </Link>
      </nav>
    </div>
  );
}
