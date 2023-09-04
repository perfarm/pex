import { useEffect } from 'react';

import PrivateRoute from '~/components/PrivateRoute';
import { TabLayout } from '~/components/TabLayout';

import { useAuth } from '~/context/auth/useAuth';
import { ScreenSchedule } from '~/screens/schedule';
import { NextPageWithLayout } from '../_app';

const Schedule: NextPageWithLayout = () => {
  const { user } = useAuth();

  useEffect(() => {
    console.log('MOUNT USER', user);
  }, [user]);

  return (
    <PrivateRoute>
      <ScreenSchedule />
    </PrivateRoute>
  );
};

Schedule.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default Schedule;
