import useDidMount from 'beautiful-react-hooks/useDidMount';
import { useEffect, useState } from 'react';
import { ScreenDownload } from '~/screens/download';
import { NextPageWithLayout } from '../_app';

const Download: NextPageWithLayout = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useDidMount(() => {
    console.log('tte--useDidMount - serviceWorker');

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(function (registration) {
          console.log('tte--Service Worker registered with scope:', registration.scope);
        })
        .catch(function (error) {
          console.error('tte--Service Worker registration failed:', error);
        });
    }
  });

  useEffect(() => {
    const deferredReady = (e: any) => {
      setDeferredPrompt(e);
    };

    if (typeof window !== 'undefined') {
      console.log('tte--addEventListener-beforeinstallprompt1');
      window.addEventListener('BeforeInstallPromptEvent', deferredReady);
      console.log('tte--addEventListener-beforeinstallprompt2');
    }

    return () => {
      console.log('tte--removeEventListener-beforeinstallprompt1');
      window.removeEventListener('BeforeInstallPromptEvent', deferredReady);
      console.log('tte--removeEventListener-beforeinstallprompt2');
    };
  }, []);

  const handleInstallClick = async () => {
    console.log('tte--click', deferredPrompt);

    if (deferredPrompt !== null) {
      console.log('tte--click pass', deferredPrompt);
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('tte--click deferredPrompt null');
        setDeferredPrompt(null);
      }
    }
  };

  return <ScreenDownload onClick={handleInstallClick} />;
};

// Só Descomentar quanto resolver `beforeinstallprompt`
// Download.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default Download;
