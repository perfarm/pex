import axios from 'axios';

import { getAccessToken } from '~/commons/storage/accessToken';

const { API_URL } = process.env;

export const api = axios.create({ baseURL: API_URL });

export const setAuthorizationToken = () => {
  const token = getAccessToken();

  Object.keys(api.defaults.headers).forEach((method) => {
    api.defaults.headers[method]['Authorization'] = `Bearer ${token}`;
  });
};
