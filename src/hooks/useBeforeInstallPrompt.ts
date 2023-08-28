import React from "react";

interface IBeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export function useBeforeInstallPrompt(): [
  IBeforeInstallPromptEvent | null,
  () => Promise<void>,
  () => () => void
] {
  const [prompt, setState] = React.useState<IBeforeInstallPromptEvent | null>(
    null
  );

  const promptToInstall = () => {
    if (prompt) {
      return prompt.prompt();
    }

    return Promise.reject(
      new Error(
        'Tried installing before browser sent "beforeinstallprompt" event'
      )
    );
  };

  const startListenner = () => {
    const ready = (e: IBeforeInstallPromptEvent) => {
      console.log("ready");
      e.preventDefault();
      setState(e);
    };

    window.addEventListener("beforeinstallprompt", ready as any);

    return () => {
      window.removeEventListener("beforeinstallprompt", ready as any);
    };
  };

  // React.useEffect(() => {
  //   const ready = (e: IBeforeInstallPromptEvent) => {
  //     e.preventDefault();
  //     setState(e);
  //   };

  //   window.addEventListener("beforeinstallprompt", ready as any);

  //   return () => {
  //     window.removeEventListener("beforeinstallprompt", ready as any);
  //   };
  // }, []);

  return [prompt, promptToInstall, startListenner];
}
