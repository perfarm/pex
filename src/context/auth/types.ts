import { PropsWithChildren } from 'react';

import { User } from '~/commons/api/fetchCurrentUser/types';

export interface Props extends PropsWithChildren { }

export type FetchCurrentUser = () => Promise<void>;

export interface AuthProps {
  fetchCurrentUser?: FetchCurrentUser;
  loading?: boolean;
  token?: string;
  user?: User;
}
