import { useEffect } from 'react';

import { Layout } from '~/components/Layout';
import PrivateRoute from '~/components/PrivateRoute';

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

FarmerInsights.getLayout = (page) => <Layout>{page}</Layout>;

export default FarmerInsights;
