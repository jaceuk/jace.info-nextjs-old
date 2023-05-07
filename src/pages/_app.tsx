import { AppProps } from 'next/app';
import Navbar from '../components/Layout/Navbar';

import '@styles/vars.css';
import '@styles/normalize.css';
import '@styles/reset.css';
import '@styles/typography.scss';
import '@styles/global.scss';

export default function App({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps}></Component>
    </>
  );
}
