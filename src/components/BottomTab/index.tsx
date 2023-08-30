import { FC, Fragment } from 'react';
import { Props } from './types';

import useDidMount from 'beautiful-react-hooks/useDidMount';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Config } from '../Icons/Config';
import { Insights } from '../Icons/Insights';
import { Schedule } from '../Icons/Schedule';
import { SeedzFarm } from '../Icons/SeedzFarm';
import { Typography } from '../Typography';
import { IconContainer, Smooth, Tab, TabRoot } from './style';

export const BottomTab: FC<Props> = () => {
  const { asPath } = useRouter();
  const scheduleTabIsActive = asPath.startsWith('/schedule') ? 'pastureGreen' : 'mediumGray';
  const perfarmTabIsActive = asPath.startsWith('/perfarm') ? 'pastureGreen' : 'mediumGray';
  const seedzFarmTabIsActive = asPath.startsWith('/seedz-farm') ? 'pastureGreen' : 'mediumGray';
  const farmerInsightsTabIsActive = asPath.startsWith('/farmer-insights') ? 'pastureGreen' : 'mediumGray';

  useDidMount(() => console.log('BOTTOM TAB MOUNT'));

  return (
    <Fragment>
      <Smooth />

      <TabRoot>
        <Tab>
          <Link href="/schedule">
            <IconContainer>
              <Schedule color={scheduleTabIsActive} />
            </IconContainer>
            <Typography color={`$${scheduleTabIsActive}`}>Programação</Typography>
          </Link>
        </Tab>
        <Tab>
          <Link href="/perfarm">
            <IconContainer>
              <Config color={perfarmTabIsActive} />
            </IconContainer>
            <Typography color={`$${perfarmTabIsActive}`}>Perfarm</Typography>
          </Link>
        </Tab>
        <Tab>
          <Link href="/seedz-farm">
            <IconContainer>
              <SeedzFarm color={seedzFarmTabIsActive} />
            </IconContainer>
            <Typography color={`$${seedzFarmTabIsActive}`}>Seedz Farm</Typography>
          </Link>
        </Tab>
        <Tab>
          <Link href="/farmer-insights">
            <IconContainer>
              <Insights color={farmerInsightsTabIsActive} />
            </IconContainer>
            <Typography color={`$${farmerInsightsTabIsActive}`}>Insights</Typography>
          </Link>
        </Tab>
      </TabRoot>
    </Fragment>
  );
};
