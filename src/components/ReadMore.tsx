import Link from 'next/link';
import { ArrowRight } from 'iconoir-react';
import styles from './ReadMore.module.scss';

interface Props {
  href: string;
  text?: string;
}

export default function ReadMore({ href, text }: Props) {
  return (
    <Link href={href}>
      <a className={styles.link}>
        <div className={styles.iconLink}>
          {text ? text : 'Read more'}
          <ArrowRight />
        </div>
      </a>
    </Link>
  );
}
