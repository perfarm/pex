import PrivateRoute from '~/components/PrivateRoute';
import { TabLayout } from '~/components/TabLayout';
import { SeedzFarm as SeedzFarmComponent } from '~/screens/SeedzFarm';

import { useMemo } from 'react';
import { useAuth } from '~/context/auth/useAuth';
import { newsList, quotationList } from '~/screens/SeedzFarm/utils';
import { NextPageWithLayout } from '../_app';

const SeedzFarm: NextPageWithLayout = () => {
  const { user } = useAuth();

  const quoatation = useMemo(
    () => quotationList.find((quotationItem) => quotationItem.id === user?.production.id),
    [user]
  );

  const news = useMemo(() => newsList.find((newsItem) => newsItem.id === user?.production.id), [user]);

  return (
    <PrivateRoute>
      <SeedzFarmComponent quotation={quoatation} news={news} />
    </PrivateRoute>
  );
};

SeedzFarm.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default SeedzFarm;
