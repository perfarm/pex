import PrivateRoute from '~/components/PrivateRoute';
import { TabLayout } from '~/components/TabLayout';
import { News as NewsComponent } from '~/screens/News';

import { NextPageWithLayout } from '../../_app';

const News: NextPageWithLayout = () => (
  <PrivateRoute>
    <NewsComponent />
  </PrivateRoute>
);

News.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default News;
