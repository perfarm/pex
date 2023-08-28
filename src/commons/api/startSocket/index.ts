import { AxiosError } from 'axios';

import { api } from '~/commons/api';
import { RequestError } from '~/commons/api/RequestError';

import { SocketResponse } from './types';

export const startSocket = async () => {
  try {
    const { data } = await api.get<SocketResponse>('/api/socket');
    return data;
  } catch (e) {
    if (e instanceof AxiosError && e.response) {
      throw new RequestError(e);
    }
    throw e;
  }
};
