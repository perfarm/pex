import useDidMount from 'beautiful-react-hooks/useDidMount';
import usePreviousValue from 'beautiful-react-hooks/usePreviousValue';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { getAccessToken } from '~/commons/storage/accessToken';

import { Loader } from '~/components/Loader';
import { useAuth } from '~/context/auth/useAuth';

const Register: FC = () => {
  const { fetchCurrentUser, user, userFetched } = useAuth();
  const { push } = useRouter();

  const oldUserFetched = usePreviousValue(userFetched);

  useDidMount(() => {
    const token = getAccessToken();

    if (token) fetchCurrentUser();
    else push('/register/profile');
  });

  useEffect(() => {
    if (oldUserFetched !== userFetched && userFetched) {
      if (!user.feature.REGISTER) {
        push('/register/profile');
        return;
      }

      if (!user.feature.SELECT_PRODUCTION) {
        push('/register/production');
        return;
      }

      push('/schedule');
    }
  }, [oldUserFetched, userFetched, user, push]);

  return <Loader position="fixed">Carregando seus dados...</Loader>;
};

export default Register;
