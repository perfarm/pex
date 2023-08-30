import { FC, useState } from 'react';

import { getAccessToken } from '~/commons/storage/adminAccessToken';
import { Login } from '~/components/pages/admin/release/Login';
import { Manage } from '~/components/pages/admin/release/Manage';

const Release: FC = () => {
  const [token, setToken] = useState(getAccessToken());

  const onSuccess = (token: string) => setToken(token);

  return token ? <Manage /> : <Login onSuccess={onSuccess} />;
};

export default Release;
