import { useEffect } from 'react';

import { Layout } from '~/components/Layout';
import PrivateRoute from '~/components/PrivateRoute';

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

Perfarm.getLayout = (page) => <Layout>{page}</Layout>;

export default Perfarm;
