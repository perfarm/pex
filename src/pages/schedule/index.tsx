import PrivateRoute from '~/components/PrivateRoute';
import { TabLayout } from '~/components/TabLayout';

import useDidMount from 'beautiful-react-hooks/useDidMount';
import { useState } from 'react';
import { fetchSchedule } from '~/commons/api/fetchSchedule';
import { Schedule } from '~/commons/firebase/schedules/types';
import { useAuth } from '~/context/auth/useAuth';
import { ScreenSchedule } from '~/screens/schedule';
import { NextPageWithLayout } from '../_app';

const Schedule: NextPageWithLayout = () => {
  const { user } = useAuth();

  const [sheduleList, setSheduleList] = useState<Schedule[]>();

  useDidMount(async () => {
    const list = await fetchSchedule();
    setSheduleList(list);
  });

  return (
    <PrivateRoute>
      <ScreenSchedule user={user} sheduleList={sheduleList} />
    </PrivateRoute>
  );
};

Schedule.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default Schedule;
