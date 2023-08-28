import { createContext, FC, useCallback, useState } from "react";

import useDidMount from "beautiful-react-hooks/useDidMount";

import { fetchCurrentUser as fetchCurrentUserInBackend } from "~/commons/api/fetchCurrentUser";
import { User } from "~/commons/api/fetchCurrentUser/types";
import { getAccessToken } from "~/commons/storage/accessToken";

import { useRouter } from "next/router";
import { AuthProps, Props } from "./types";

export const AuthContext = createContext({} as AuthProps);

export const AuthProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);

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
      push("/register");
    } finally {
      setLoading(false);
    }
  }, [loading, push]);

  return (
    <AuthContext.Provider value={{ fetchCurrentUser, loading, token, user }}>
      {children}
    </AuthContext.Provider>
  );
};
