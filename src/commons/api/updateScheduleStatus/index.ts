import { AxiosError } from 'axios';

import { adminApi } from '~/commons/api';
import { RequestError } from '~/commons/api/RequestError';
import { Status } from '~/commons/firebase/schedules/types';
import { ScheduleMessage } from '~/components/UserWebSocket/types';

export const updateScheduleStatus = async (id: string, status: Status) => {
  try {
    const { data } = await adminApi.post<ScheduleMessage>('/api/schedule/status', { id, status });
    return data;
  } catch (e) {
    if (e instanceof AxiosError && e.response) {
      throw new RequestError(e);
    }
    throw e;
  }
};

