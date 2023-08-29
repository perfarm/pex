import type { AppProps } from "next/app";
import { IoProvider } from "socket.io-react-hook";

import useDidMount from "beautiful-react-hooks/useDidMount";
import dynamic from "next/dynamic";
import { useState } from "react";
import {
  setAdminAuthorizationToken,
  setAuthorizationToken,
} from "~/commons/api";
import { startSocket } from "~/commons/api/startSocket";
import { Loader } from "~/components/Loader";
import { AuthProvider } from "~/context/auth";
import { globalStyles } from "~/theme/globalStyles";

globalStyles();

function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useDidMount(async () => {
    setAuthorizationToken();
    setAdminAuthorizationToken();

    await startSocket();

    setTimeout(() => setLoading(false), 500);
  });

  if (loading) {
    return (
      <div style={{ background: "#FFF", height: "100vh", width: "100vw" }}>
        <Loader position="fixed">Carregando app...</Loader>
      </div>
    );
  }

  return (
    <AuthProvider>
      <IoProvider>
        <Component {...pageProps} />
      </IoProvider>
    </AuthProvider>
  );
}

export default dynamic(() => Promise.resolve(App), { ssr: false });
