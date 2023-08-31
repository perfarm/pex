import { FC, Fragment } from 'react';

import useDidMount from 'beautiful-react-hooks/useDidMount';

import { useRouter } from 'next/router';
import { getAccessToken } from '~/commons/storage/accessToken';
import { Props } from './types';

const PrivateRoute: FC<Props> = ({ children }) => {
  const token = getAccessToken();

  const { push } = useRouter();

  useDidMount(() => {
    if (!token) push('/register/profile');
  });

  return <Fragment>{children}</Fragment>;
};

export default PrivateRoute;
