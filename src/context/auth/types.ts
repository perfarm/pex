import { PropsWithChildren } from 'react';

import { User } from '~/commons/firebase/users/types';

export interface Props extends PropsWithChildren { }

export type FetchCurrentUser = () => Promise<void>;

export interface AuthProps {
  fetchCurrentUser?: FetchCurrentUser;
  loading?: boolean;
  token?: string;
  user?: User;
  userFetched?: boolean;
}
