import { AxiosError } from 'axios';

import { ReqError } from '~/commons/api/types';

export const parseError = (error: Error | AxiosError): ReqError => ({
  data: error && (error as AxiosError)?.response && (error as AxiosError)?.response.data,
  status: error && (error as AxiosError)?.response && (error as AxiosError)?.response.status,
});
