import { AxiosError } from 'axios';

import { adminApi } from '~/commons/api';
import { RequestError } from '~/commons/api/RequestError';

import { Release } from '~/commons/storage/release/types';
import { SocketResponse } from './types';

export const disableFeature = async (feature: keyof typeof Release) => {
  try {
    const { data } = await adminApi.post<SocketResponse>('/api/feature/disable', { feature });
    return data;
  } catch (e) {
    if (e instanceof AxiosError && e.response) {
      throw new RequestError(e);
    }
    throw e;
  }
};
