import { AxiosError } from 'axios';

import { api } from '~/commons/api';
import { RequestError } from '~/commons/api/RequestError';

import { Machine } from '~/commons/firebase/machines/types';

export const fetchMachines = async () => {
  try {
    const { data } = await api.get<Machine[]>('/api/machine');

    return data;
  } catch (e) {
    if (e instanceof AxiosError && e.response) {
      throw new RequestError(e);
    }
    throw e;
  }
};
