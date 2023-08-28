import type { AppProps } from "next/app";

import useDidMount from "beautiful-react-hooks/useDidMount";
import { useState } from "react";
import { setAuthorizationToken } from "~/commons/api";
import { Loader } from "~/components/Loader";
import { AuthProvider } from "~/context/auth";
import "~/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useDidMount(() => {
    setAuthorizationToken();

    setTimeout(() => {
      setLoading(false);
    }, 500);
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
      <Component {...pageProps} />
    </AuthProvider>
  );
}
