import { useEffect } from 'react';

import PrivateRoute from '~/components/PrivateRoute';
import { TabLayout } from '~/components/TabLayout';

import { useAuth } from '~/context/auth/useAuth';
import { NextPageWithLayout } from '../_app';

const FarmerInsights: NextPageWithLayout = () => {
  const { user } = useAuth();

  useEffect(() => {
    console.log('Perfarm MOUNT USER', user);
  }, [user]);

  return (
    <PrivateRoute>
      <div>Farmer Insights</div>
    </PrivateRoute>
  );
};

FarmerInsights.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default FarmerInsights;
