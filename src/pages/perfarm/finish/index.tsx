import PrivateRoute from '~/components/PrivateRoute';
import { TabLayout } from '~/components/TabLayout';

import { NextPageWithLayout } from '~/pages/_app';
import { Finish as FinishComponent } from '~/screens/perfarm/finish';

const Finish: NextPageWithLayout = () => (
  <PrivateRoute>
    <FinishComponent />
  </PrivateRoute>
);

Finish.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default Finish;
