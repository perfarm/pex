import { AxiosError } from 'axios';

import { api } from '~/commons/api';
import { RequestError } from '~/commons/api/RequestError';

import { ProductItem } from './types';

export const fetchProducts = async () => {
  try {
    const { data } = await api.get<ProductItem[]>('/api/production');

    return data;
  } catch (e) {
    if (e instanceof AxiosError && e.response) {
      throw new RequestError(e);
    }
    throw e;
  }
};
