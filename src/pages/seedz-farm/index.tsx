import PrivateRoute from '~/components/PrivateRoute';
import { TabLayout } from '~/components/TabLayout';
import { SeedzFarm as SeedzFarmComponent } from '~/screens/SeedzFarm';

import { useMemo } from 'react';
import { useAuth } from '~/context/auth/useAuth';
import { quotationList } from '~/screens/SeedzFarm/utils/quotationList';
import { NextPageWithLayout } from '../_app';

const SeedzFarm: NextPageWithLayout = () => {
  const { user } = useAuth();

  const quoatation = useMemo(() => {
    const [selectedQuotation] = quotationList.filter((quotationItem) => quotationItem.id === user?.production.id);

    return selectedQuotation;
  }, [user]);

  return (
    <PrivateRoute>
      <SeedzFarmComponent quotation={quoatation} />
    </PrivateRoute>
  );
};

SeedzFarm.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default SeedzFarm;
