import { AxiosError } from 'axios';

import { api } from '~/commons/api';
import { RequestError } from '~/commons/api/RequestError';

import { ProductionInput } from '~/commons/firebase/production-inputs/types';

export const fechProductInput = async () => {
  try {
    const { data } = await api.get<ProductionInput[]>('/api/product-input');

    return data;
  } catch (e) {
    if (e instanceof AxiosError && e.response) {
      throw new RequestError(e);
    }
    throw e;
  }
};
