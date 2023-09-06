import PrivateRoute from '~/components/PrivateRoute';
import { TabLayout } from '~/components/TabLayout';

import { NextPageWithLayout } from '~/pages/_app';
import { Machine as MachineComponent } from '~/screens/perfarm/machine';

const Machine: NextPageWithLayout = () => (
  <PrivateRoute>
    <MachineComponent />
  </PrivateRoute>
);

Machine.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default Machine;
