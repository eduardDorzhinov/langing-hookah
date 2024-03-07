import { Head, Html, Main, NextScript } from 'next/document';
import useTranslation from 'next-translate/useTranslation';
import { DIR_COMMON } from '../../constants';

export default function Document() {
  const { lang } = useTranslation(DIR_COMMON);
  return (
    <Html lang={lang}>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        {/*@ts-ignore*/}
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet" />

        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='google-site-verification' content='hWC77DCouKSJtDtmgr5MC-Ia25aU_sVup0M3-ygn92E' />
      </Head>
      <body>
      <Main />
      <NextScript />
      <div id='modal-root'></div>
      </body>
    </Html>
  );
}
