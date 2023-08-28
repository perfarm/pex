import Script from "next/script";
import { useCallback, useEffect, useState } from "react";
import { useBeforeInstallPrompt } from "~/hooks/useBeforeInstallPrompt";

export default function Install() {
  const [prompt, promptToInstall, startListenner] = useBeforeInstallPrompt();
  const [removeListenner, setRemoveListenner] = useState<() => void>();

  const onClick = useCallback(async () => {
    if (!prompt) return alert("NAO installPromptEvent");
    const resp = await promptToInstall();
    removeListenner();
    console.log("resp", resp);
  }, [prompt, promptToInstall, removeListenner]);

  useEffect(() => console.log("prompt: ", prompt), [prompt]);

  return (
    <div>
      <Script
        id="stripe-js"
        src="https://js.stripe.com/v3/"
        onLoad={() => {
          console.log("OLAAAA");
          const onRemoveListenner = startListenner();
          setRemoveListenner(onRemoveListenner);
          // or something else
        }}
      />
      Tela de instalação
      <button onClick={onClick}>Instalar</button>
    </div>
  );
}
