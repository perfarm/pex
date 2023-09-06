import { TabLayout } from '~/components/TabLayout';
import { ScreenDownload } from '~/screens/download';
import { NextPageWithLayout } from '../_app';

const Download: NextPageWithLayout = () => <ScreenDownload />;

Download.getLayout = (page) => <TabLayout>{page}</TabLayout>;

export default Download;
