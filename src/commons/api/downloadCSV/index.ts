import { AxiosError } from 'axios';

import { adminApi } from '~/commons/api';
import { RequestError } from '~/commons/api/RequestError';

export const downloadCSV = async () => {
  try {
    const { data } = await adminApi.get<string>('/api/admin/export');
    return data;
  } catch (e) {
    if (e instanceof AxiosError && e.response) {
      throw new RequestError(e);
    }
    throw e;
  }
};
