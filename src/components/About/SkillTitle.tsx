import styles from './SkillTitle.module.scss';

interface Props {
  icon: React.ReactNode;
  title: string;
}

export default function SkillTitle({ icon, title }: Props) {
  return (
    <h3 className={styles.skillTitle}>
      {icon}
      {title}
    </h3>
  );
}
