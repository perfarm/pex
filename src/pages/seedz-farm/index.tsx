import { useEffect } from 'react';

import PrivateRoute from '~/components/PrivateRoute';
import { TabLayout } from '~/components/TabLayout';

import { useAuth } from '~/context/auth/useAuth';
import { NextPageWithLayout } from '../_app';

const SeedzFarm: NextPageWithLayout = () => {
  const { user } = useAuth();

  useEffect(() => {
    console.log('Perfarm MOUNT USER', user);
  }, [user]);

  return (
    <PrivateRoute>
      <div>Seedz Farm</div>
    </PrivateRoute>
  );
};

SeedzFarm.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default SeedzFarm;
