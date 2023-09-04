import { CardProduct } from '~/components/CardProduct';

import { Typography } from '~/components/Typography';
import { styled } from '~/theme';

const paddingX = '30px';

const Content = styled('div', {
  display: 'flex',
  flex: 1,
});

const zIndexGreaterThanTimeline = styled('div', {
  zIndex: 99,
  position: 'relative',
});

export const Root = styled('div');

export const Container = styled('div', {
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  width: '100%',
  maxWidth: '$minScreenWidth',
  position: 'relative',
});

export const Br = styled('br');

export const Title = styled(Typography, zIndexGreaterThanTimeline);

export const Subtitle = styled(Typography, zIndexGreaterThanTimeline);

export const HeaderCardProduct = styled(CardProduct, {
  position: 'absolute',
  left: 0,
  bottom: '-37.5px',
});

export const HeaderContent = styled(Content, zIndexGreaterThanTimeline, {
  backgroundColor: '$pastureGreen',
  flexDirection: 'column',
  padding: `30px ${paddingX} 0 ${paddingX}`,

  [`& ${Container}`]: {
    paddingBottom: '50px',
  },
});

export const BodyContent = styled(Content, {
  padding: `70px ${paddingX} 60px ${paddingX}`,
});

export const ScheduleList = styled('div', {
  maxWidth: '$minScreenWidth',

  marginTop: 15,
  display: 'flex',
  flexDirection: 'column',
});
