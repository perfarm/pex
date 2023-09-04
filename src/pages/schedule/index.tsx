import PrivateRoute from '~/components/PrivateRoute';
import { TabLayout } from '~/components/TabLayout';

import { useAuth } from '~/context/auth/useAuth';
import { ScreenSchedule } from '~/screens/schedule';
import { NextPageWithLayout } from '../_app';

const Schedule: NextPageWithLayout = () => {
  const { user } = useAuth();

  return (
    <PrivateRoute>
      <ScreenSchedule user={user} />
    </PrivateRoute>
  );
};

Schedule.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default Schedule;
