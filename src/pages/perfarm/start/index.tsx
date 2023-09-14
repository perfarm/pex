import PrivateRoute from '~/components/PrivateRoute';
import { TabLayout } from '~/components/TabLayout';
import { NextPageWithLayout } from '~/pages/_app';

import { ScreenPerfarmStart } from '~/screens/perfarm/start';

const PerfarmInfo: NextPageWithLayout = () => (
  <PrivateRoute>
    <ScreenPerfarmStart />
  </PrivateRoute>
);

PerfarmInfo.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default PerfarmInfo;
