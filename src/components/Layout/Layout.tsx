import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
}
