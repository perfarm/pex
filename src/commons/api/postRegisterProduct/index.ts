import { AxiosError } from 'axios';

import { api } from '~/commons/api';
import { RequestError } from '~/commons/api/RequestError';
import { ProductItem } from '../fechProducts/types';

export const postRegisterProduct = async (productionId: string) => {
  try {
    const { data } = await api.post<ProductItem>('/api/user/production', { productionId });

    return data;
  } catch (e) {
    if (e instanceof AxiosError && e.response) {
      throw new RequestError(e);
    }
    throw e;
  }
};
