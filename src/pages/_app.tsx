import { FavProvider } from '@/context/FavContext';
import DefaultLayout from '@/layouts/DefaultLayout';

import type { AppProps } from 'next/app';
import '@/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FavProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </FavProvider>
  );
}

export default MyApp;
