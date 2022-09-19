interface Props {
  children: React.ReactNode;
}

export default function SkillTitle({ children }: Props) {
  return <h3 className="skill-title">{children}</h3>;
}
