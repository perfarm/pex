import { useEffect, useState } from 'react';
import { ScreenDownload } from '~/screens/download';
import { NextPageWithLayout } from '../_app';

const Download: NextPageWithLayout = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const deferredReady = (e: any) => {
      setDeferredPrompt(e);
    };

    if (typeof window !== 'undefined') {
      console.log('tte--addEventListener-beforeinstallprompt1');
      window.addEventListener('beforeinstallprompt', deferredReady);
      console.log('tte--addEventListener-beforeinstallprompt2');
    }

    return () => {
      console.log('tte--removeEventListener-beforeinstallprompt1');
      window.removeEventListener('beforeinstallprompt', deferredReady);
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
        setDeferredPrompt(null);
      }
    }
  };

  return <ScreenDownload onClick={handleInstallClick} />;
};

// Só Descomentar quanto resolver `beforeinstallprompt`
// Download.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default Download;
