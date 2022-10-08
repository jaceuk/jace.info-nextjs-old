import styles from './Alert.module.scss';
import { CheckCircledOutline } from 'iconoir-react';
import { DeleteCircledOutline } from 'iconoir-react';

interface Props {
  children: React.ReactNode;
  type: string;
}

export default function Alert({ children, type }: Props) {
  return (
    <div className={`${styles.container} ${styles[type]}`} role={type === 'error' ? 'alert' : undefined}>
      <div className={styles.iconContainer}>
        {type === 'success' && <CheckCircledOutline />}
        {type === 'error' && <DeleteCircledOutline />}
      </div>
      <div className={styles.textContainer}>{children}</div>
    </div>
  );
}
