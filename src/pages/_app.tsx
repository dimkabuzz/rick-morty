import DefaultLayout from '@/layouts/DefaultLayout';

import type { AppProps } from 'next/app';
import '@/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
