import { AxiosError } from 'axios';

import { adminApi } from '~/commons/api';
import { RequestError } from '~/commons/api/RequestError';
import { User } from '~/commons/firebase/users/types';

export const fetchUsers = async () => {
  try {
    const { data } = await adminApi.get<User[]>('/api/admin/user');
    return data;
  } catch (e) {
    if (e instanceof AxiosError && e.response) {
      throw new RequestError(e);
    }
    throw e;
  }
};
