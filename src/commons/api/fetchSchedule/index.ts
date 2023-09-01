import { AxiosError } from 'axios';

import { api } from '~/commons/api';
import { RequestError } from '~/commons/api/RequestError';
import { Schedule } from '~/commons/firebase/schedules/types';

export const fetchSchedule = async () => {
  try {
    const { data } = await api.get<Schedule[]>('/api/schedule');
    return data;
  } catch (e) {
    if (e instanceof AxiosError && e.response) {
      throw new RequestError(e);
    }
    throw e;
  }
};