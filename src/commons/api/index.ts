import axios from 'axios';

import { getAccessToken } from '~/commons/storage/accessToken';
import { getAccessToken as getAdminAccessToken } from '~/commons/storage/adminAccessToken';

const { API_URL } = process.env;

export const api = axios.create({ baseURL: API_URL });
export const adminApi = axios.create({ baseURL: API_URL });

export const setAuthorizationToken = () => {
  const token = getAccessToken();

  if (!token) return;

  Object.keys(api.defaults.headers).forEach((method) => {
    (api.defaults.headers[method] as any)['Authorization'] = `Bearer ${token}`;
  });
};

export const setAdminAuthorizationToken = () => {
  const token = getAdminAccessToken();

  if (!token) return;

  Object.keys(adminApi.defaults.headers).forEach((method) => {
    (adminApi.defaults.headers[method] as any)['Authorization'] = `Bearer ${token}`;
  });
};
