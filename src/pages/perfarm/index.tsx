import PrivateRoute from '~/components/PrivateRoute';
import { TabLayout } from '~/components/TabLayout';

import { ScreenPerfarm } from '~/screens/perfarm';
import { NextPageWithLayout } from '../_app';

const Perfarm: NextPageWithLayout = () => {
  // const { user } = useAuth();

  // const [sheduleList, setSheduleList] = useState<Simulator[]>();

  // useDidMount(async () => {
  //   const list = await fetchSchedule();
  //   setSheduleList(list);
  // });

  return (
    <PrivateRoute>
      <ScreenPerfarm />
    </PrivateRoute>
  );
};

Perfarm.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default Perfarm;
