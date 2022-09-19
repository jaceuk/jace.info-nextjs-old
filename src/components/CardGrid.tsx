interface Props {
  children: React.ReactNode;
}

export default function CardGrid({ children }: Props) {
  return <div className="card-grid">{children}</div>;
}
