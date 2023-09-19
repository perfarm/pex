import PrivateRoute from '~/components/PrivateRoute';
import { TabLayout } from '~/components/TabLayout';
import { SeedzFarm as SeedzFarmComponent } from '~/screens/SeedzFarm';

import { useMemo } from 'react';
import { useAuth } from '~/context/auth/useAuth';
import { newsList, quotationList } from '~/screens/SeedzFarm/utils';
import { NextPageWithLayout } from '../_app';

const SeedzFarm: NextPageWithLayout = () => {
  const { user } = useAuth();

  const quoatation = useMemo(() => {
    const [selected] = quotationList.filter((quotationItem) => quotationItem.id === user?.production.id);

    return selected;
  }, [user]);

  const news = useMemo(() => {
    const [selected] = newsList.filter((newsItem) => newsItem.id === user?.production.id);

    return selected;
  }, [user]);

  return (
    <PrivateRoute>
      <SeedzFarmComponent quotation={quoatation} news={news} />
    </PrivateRoute>
  );
};

SeedzFarm.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default SeedzFarm;
