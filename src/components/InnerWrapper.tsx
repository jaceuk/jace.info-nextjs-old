interface Props {
  children: React.ReactNode;
}

export default function InnerWrapper({ children }: Props) {
  return <div className="inner-wrapper">{children}</div>;
}
