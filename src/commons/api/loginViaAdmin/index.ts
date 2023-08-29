import { AxiosError } from 'axios';

import { adminApi } from '~/commons/api';
import { RequestError } from '~/commons/api/RequestError';

import { Response } from './types';

export const loginViaAdmin = async (username: string, password: string) => {
  try {
    const { data } = await adminApi.post<Response>('/api/admin/login', { password, username });
    return data;
  } catch (e) {
    if (e instanceof AxiosError && e.response) {
      throw new RequestError(e);
    }
    throw e;
  }
};
