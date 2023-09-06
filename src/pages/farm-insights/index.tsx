import PrivateRoute from '~/components/PrivateRoute';
import { TabLayout } from '~/components/TabLayout';
import { Insights as InsightsComponent } from '~/screens/Insights';

import { NextPageWithLayout } from '../_app';

const Insights: NextPageWithLayout = () => (
  <PrivateRoute>
    <InsightsComponent />
  </PrivateRoute>
);

Insights.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default Insights;
