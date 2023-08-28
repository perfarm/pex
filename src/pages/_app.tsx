import type { AppProps } from "next/app";

import useDidMount from "beautiful-react-hooks/useDidMount";
import dynamic from "next/dynamic";
import { useState } from "react";
import { setAuthorizationToken } from "~/commons/api";
import { Loader } from "~/components/Loader";
import { AuthProvider } from "~/context/auth";
import "~/styles/globals.css";

if (typeof window !== "undefined") {
  // window.addEventListener("load", () => console.log("LOADED"));
  document.addEventListener("DOMContentLoaded", () =>
    console.log("DOMContentLoaded")
  );
}

function App({ Component, pageProps }: AppProps) {
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

export default dynamic(() => Promise.resolve(App), { ssr: false });
