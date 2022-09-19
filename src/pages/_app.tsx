import { AppProps } from 'next/app';

import '@styles/vars.css';
import '@styles/normalize.css';
import '@styles/reset.css';
import '@styles/typography.scss';
import '@styles/style.scss';

export default function App({ Component, pageProps: { ...pageProps } }: AppProps) {
  return <Component {...pageProps}></Component>;
}
