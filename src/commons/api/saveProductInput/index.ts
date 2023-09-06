import { AxiosError } from 'axios';

import { api } from '~/commons/api';
import { RequestError } from '~/commons/api/RequestError';
import { ProductionInput } from '~/commons/firebase/production-inputs/types';

export const saveProductInput = async (productInputId: string) => {
  try {
    const { data } = await api.post<ProductionInput>('/api/user/product-input', { productInputId });

    return data;
  } catch (e) {
    if (e instanceof AxiosError && e.response) {
      throw new RequestError(e);
    }
    throw e;
  }
};
