import PrivateRoute from '~/components/PrivateRoute';
import { TabLayout } from '~/components/TabLayout';

import { useCallback } from 'react';
import { ScreenDownload } from '~/screens/download';
import { NextPageWithLayout } from '../_app';

const Download: NextPageWithLayout = () => {
  const handleDownload = useCallback(() => console.log('aaaa'), []);

  return (
    <PrivateRoute>
      <ScreenDownload onClick={handleDownload} />
    </PrivateRoute>
  );
};

Download.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default Download;
