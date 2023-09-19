import useDidMount from 'beautiful-react-hooks/useDidMount';
import { useState } from 'react';
import { RequestError } from '~/commons/api/RequestError';
import PrivateRoute from '~/components/PrivateRoute';
import { toast } from '~/components/Toaster';
import { useAuth } from '~/context/auth/useAuth';
import { SeedzFarm as SeedzFarmComponent } from '~/screens/SeedzFarm';
import { NextPageWithLayout } from '../_app';

export const SeedzFarm: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(false);

  const { user, fetchCurrentUser, loading: loadingUser } = useAuth();

  useDidMount(async () => {
    setLoading(true);

    if (user?.machine) return;

    try {
      await fetchCurrentUser();

      toast.success('Maquinário salvo com sucesso');

      // push('/perfarm/machine/finish');
    } catch (e) {
      toast.error((e as RequestError).data.message);
    } finally {
      setLoading(false);
    }
  }, [fetchCurrentUser, user]);

  return (
    <PrivateRoute>
      <SeedzFarmComponent />
    </PrivateRoute>
  );
};
