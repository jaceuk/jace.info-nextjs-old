interface Props {
  children: React.ReactNode;
}

export default function IconLink({ children }: Props) {
  return <div className="icon-link">{children}</div>;
}
