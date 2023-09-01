import { createContext, FC, useCallback, useState } from 'react';

import useDidMount from 'beautiful-react-hooks/useDidMount';

import { fetchCurrentUser as fetchCurrentUserInBackend } from '~/commons/api/fetchCurrentUser';
import { getAccessToken } from '~/commons/storage/accessToken';

import { useRouter } from 'next/router';
import { RequestError } from '~/commons/api/RequestError';
import { User } from '~/commons/firebase/users/types';
import { toast } from '~/components/Toaster';
import { AuthProps, Props } from './types';

export const AuthContext = createContext({} as AuthProps);

export const AuthProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);
  const [userFetched, setUserFetched] = useState(false);

  const token = getAccessToken();

  const { push } = useRouter();

  useDidMount(() => {
    if (token && !user) fetchCurrentUser();
  });

  const fetchCurrentUser = useCallback(async () => {
    if (loading) return;

    setLoading(true);

    try {
      const userData = await fetchCurrentUserInBackend();
      setUser(userData);
    } catch (e) {
      toast.error((e as RequestError).data.message);
      push('/register');
    } finally {
      setLoading(false);
      setUserFetched(true);
    }
  }, [loading, push]);

  return (
    <AuthContext.Provider value={{ fetchCurrentUser, loading, token, user, userFetched }}>
      {children}
    </AuthContext.Provider>
  );
};
