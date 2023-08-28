import { AxiosError } from 'axios';

import { api } from '~/commons/api';
import { RequestError } from '~/commons/api/RequestError';

import { Release } from '~/commons/storage/release/types';
import { SocketResponse } from './types';

export const releaseFeature = async (feature: keyof typeof Release) => {
  try {
    const { data } = await api.post<SocketResponse>('/api/socket/release', { feature });
    return data;
  } catch (e) {
    if (e instanceof AxiosError && e.response) {
      throw new RequestError(e);
    }
    throw e;
  }
};
