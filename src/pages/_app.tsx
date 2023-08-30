import type { AppProps } from 'next/app';
import { IoProvider } from 'socket.io-react-hook';

import useDidMount from 'beautiful-react-hooks/useDidMount';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { ReactElement, ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import { setAdminAuthorizationToken, setAuthorizationToken } from '~/commons/api';
import { startSocket } from '~/commons/api/startSocket';
import { Loader } from '~/components/Loader';
import { Toaster } from '~/components/Toaster';
import { AuthProvider } from '~/context/auth';
import { globalStyles } from '~/theme/globalStyles';

globalStyles();

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };

function App({ Component, pageProps }: AppPropsWithLayout) {
  const [loading, setLoading] = useState(true);

  useDidMount(async () => {
    setAuthorizationToken();
    setAdminAuthorizationToken();

    await startSocket();

    setTimeout(() => setLoading(false), 500);
  });

  if (loading) {
    return (
      <div style={{ background: '#FFF', height: '100vh', width: '100vw' }}>
        <Loader position="fixed">Carregando app...</Loader>
      </div>
    );
  }

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <AuthProvider>
      <IoProvider>
        {getLayout(<Component {...pageProps} />)}
        {createPortal(<Toaster />, document.body)}
      </IoProvider>
    </AuthProvider>
  );
}

export default dynamic(() => Promise.resolve(App), { ssr: false });
