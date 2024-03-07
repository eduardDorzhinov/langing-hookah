import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '@/styles/cleanup.scss';
import '@/styles/fonts.scss';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  return <Component {...pageProps} />;
}
