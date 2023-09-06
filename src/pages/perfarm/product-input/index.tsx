import PrivateRoute from '~/components/PrivateRoute';
import { TabLayout } from '~/components/TabLayout';

import { NextPageWithLayout } from '~/pages/_app';
import { ProductInput as ProductInputComponent } from '~/screens/perfarm/product-input';

const ProductInput: NextPageWithLayout = () => (
  <PrivateRoute>
    <ProductInputComponent />
  </PrivateRoute>
);

ProductInput.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default ProductInput;
