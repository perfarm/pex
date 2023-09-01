import { AxiosError } from 'axios';

import { api } from '~/commons/api';
import { RequestError } from '~/commons/api/RequestError';

import { ProfileValues, Response } from './types';

export const fetchRegisterProfile = async (values: ProfileValues) => {
  try {
    const { data } = await api.post<Response>('/api/user/register', { ...values });

    console.log('tte--data', data);

    return data;
  } catch (e) {
    if (e instanceof AxiosError && e.response) {
      throw new RequestError(e);
    }
    throw e;
  }
};
