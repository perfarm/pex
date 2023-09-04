import PrivateRoute from '~/components/PrivateRoute';
import { TabLayout } from '~/components/TabLayout';
import { SeedzFarm as SeedzFarmComponent } from '~/screens/SeedzFarm';

import { NextPageWithLayout } from '../_app';

const SeedzFarm: NextPageWithLayout = () => (
  <PrivateRoute>
    <SeedzFarmComponent />
  </PrivateRoute>
);

SeedzFarm.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default SeedzFarm;
