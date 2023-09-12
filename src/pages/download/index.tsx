import useDidMount from 'beautiful-react-hooks/useDidMount';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { NextPageWithLayout } from '~/pages/_app';
import { ScreenDownload } from '~/screens/Download';
import { identifyBrowser, identifyDevice } from '~/utils/device';

const Download: NextPageWithLayout = () => {
  const [isDownloadable, setIsDownloadable] = useState(false);

  const { push } = useRouter();

  useDidMount(() => {
    const deviceType = identifyDevice();
    const browserType = identifyBrowser();

    if (deviceType === 'ios' || browserType === 'safari') {
      push('/download/step-by-step/1');
      return;
    }

    if (browserType === 'chrome') {
      setIsDownloadable(true);
      return;
    }

    setIsDownloadable(false);
  });

  return <ScreenDownload isDownloadable={isDownloadable} />;
};

export default Download;
