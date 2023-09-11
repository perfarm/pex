import useDidMount from 'beautiful-react-hooks/useDidMount';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '~/pages/_app';
import { ScreenDownload } from '~/screens/Download';
import { identifyDevice } from '~/utils/device';

const Download: NextPageWithLayout = () => {
  const { push } = useRouter();

  useDidMount(() => {
    const deviceType = identifyDevice();

    if (deviceType === 'ios') {
      push('/download/step-by-step/1');
    }
  });

  return <ScreenDownload />;
};

export default Download;
