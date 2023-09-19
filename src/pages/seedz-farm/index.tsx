import PrivateRoute from '~/components/PrivateRoute';
import { TabLayout } from '~/components/TabLayout';
import { SeedzFarm as SeedzFarmComponent } from '~/screens/SeedzFarm';

import useDidMount from 'beautiful-react-hooks/useDidMount';
import { useState } from 'react';
import { RequestError } from '~/commons/api/RequestError';
import { toast } from '~/components/Toaster';
import { useAuth } from '~/context/auth/useAuth';
import { News, Quoatation } from '~/screens/SeedzFarm/types';
import { NextPageWithLayout } from '../_app';

const SeedzFarm: NextPageWithLayout = () => {
  const { user, fetchCurrentUser, loading: loadingUser } = useAuth();

  const [loading, setLoading] = useState(false);

  const [userData, setUserData] = useState<Quoatation>();
  const [quoatation, setQuoatation] = useState<Quoatation>();
  const [news, setNews] = useState<News>();

  useDidMount(async () => {
    setLoading(true);

    if (user?.production) return;

    try {
      const data = await fetchCurrentUser();
      // setUserData(data);
      console.log('tte--data', data);
    } catch (e) {
      toast.error((e as RequestError).data.message);
    } finally {
      setLoading(false);
    }
  });

  return (
    <PrivateRoute>
      <SeedzFarmComponent quoatation={quoatation} news={news} />
    </PrivateRoute>
  );
};

SeedzFarm.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default SeedzFarm;
