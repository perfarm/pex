import { useEffect } from 'react';

import PrivateRoute from '~/components/PrivateRoute';
import { TabLayout } from '~/components/TabLayout';

import { useAuth } from '~/context/auth/useAuth';
import { NextPageWithLayout } from '../_app';

const Perfarm: NextPageWithLayout = () => {
  const { user } = useAuth();

  useEffect(() => {
    console.log('Perfarm MOUNT USER', user);
  }, [user]);

  return (
    <PrivateRoute>
      <div>Perfarm</div>
    </PrivateRoute>
  );
};

Perfarm.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default Perfarm;
