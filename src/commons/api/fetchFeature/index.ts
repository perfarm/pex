import { AxiosError } from 'axios';

import { api } from '~/commons/api';
import { RequestError } from '~/commons/api/RequestError';
import { Feature } from '~/commons/firebase/features/types';

export const fetchFeature = async () => {
  try {
    const { data } = await api.get<Feature>('/api/feature');
    return data;
  } catch (e) {
    if (e instanceof AxiosError && e.response) {
      throw new RequestError(e);
    }
    throw e;
  }
};
