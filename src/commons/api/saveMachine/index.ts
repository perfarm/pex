import { AxiosError } from 'axios';

import { api } from '~/commons/api';
import { RequestError } from '~/commons/api/RequestError';
import { ProductionInput } from '~/commons/firebase/production-inputs/types';

export const saveMachine = async (machineId: string) => {
  try {
    const { data } = await api.post<ProductionInput>('/api/user/machine', { machineId });

    return data;
  } catch (e) {
    if (e instanceof AxiosError && e.response) {
      throw new RequestError(e);
    }
    throw e;
  }
};
