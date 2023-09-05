import PrivateRoute from '~/components/PrivateRoute';
import { TabLayout } from '~/components/TabLayout';

import useDidMount from 'beautiful-react-hooks/useDidMount';
import usePreviousValue from 'beautiful-react-hooks/usePreviousValue';
import { useCallback, useEffect, useState } from 'react';
import { useSocketEvent } from 'socket.io-react-hook';
import { RequestError } from '~/commons/api/RequestError';
import { fetchSchedule } from '~/commons/api/fetchSchedule';
import { Schedule } from '~/commons/firebase/schedules/types';
import { SocketEvent } from '~/commons/socket/events';
import { toast } from '~/components/Toaster';
import { ScheduleMessage } from '~/components/UserWebSocket/types';
import { useAuth } from '~/context/auth/useAuth';
import { ScreenSchedule } from '~/screens/schedule';
import { NextPageWithLayout } from '../_app';

const Schedule: NextPageWithLayout = () => {
  const { user } = useAuth();

  const { lastMessage = {} as ScheduleMessage } = useSocketEvent<ScheduleMessage>(SocketEvent.RELEASE_SCHEDULE);

  const [sheduleList, setSheduleList] = useState<Schedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshLoading, setRefreshLoading] = useState(false);
  const oldScheduleId = usePreviousValue(lastMessage.id);

  const refresh = useCallback(async () => {
    setRefreshLoading(true);
    try {
      const list = await fetchSchedule();
      setSheduleList(list);

      toast.success('Cronograma atualizado');
    } catch (e) {
      toast.error((e as RequestError).data.message);
    } finally {
      setRefreshLoading(false);
    }
  }, []);

  useDidMount(async () => {
    try {
      const list = await fetchSchedule();
      setSheduleList(list);
    } catch (e) {
      toast.error((e as RequestError).data.message);
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    const scheduleChanged = oldScheduleId !== lastMessage.id && lastMessage.id;
    const index = sheduleList.findIndex((s) => s.id === lastMessage.schedule?.id);
    const currentStatus = sheduleList[index]?.status;

    if (lastMessage.action === 'STATUS_CHANGED' && (scheduleChanged || currentStatus !== lastMessage.newStatus)) {
      const index = sheduleList.findIndex((s) => s.id === lastMessage.schedule?.id);
      if (index === -1) return;

      sheduleList[index].status = lastMessage.newStatus;

      setSheduleList([...sheduleList]);
    }
  }, [lastMessage.action, lastMessage.id, lastMessage.newStatus, lastMessage.schedule?.id, oldScheduleId, sheduleList]);

  return (
    <PrivateRoute>
      <ScreenSchedule
        refreshLoading={refreshLoading}
        refresh={refresh}
        user={user}
        sheduleList={sheduleList}
        loading={loading}
      />
    </PrivateRoute>
  );
};

Schedule.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default Schedule;
