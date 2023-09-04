import { CardProduct } from '~/components/CardProduct';
import { ScheduleCard as ScheduleItem } from '~/components/ScheduleCard';
import { Typography } from '~/components/Typography';
import { styled } from '~/theme';

const paddingX = '30px';

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

export const Title = styled(Typography);

export const Subtitle = styled(Typography);

export const HeaderContent = styled('div', {
  backgroundColor: '$pastureGreen',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  padding: `30px ${paddingX} 0 ${paddingX}`,

  [`& ${Container}`]: {
    paddingBottom: '50px',
  },
});

export const HeaderCardProduct = styled(CardProduct, {
  position: 'absolute',
  left: 0,
  bottom: '-37.5px',
});

export const BodyContent = styled('div', {
  display: 'flex',
  flex: 1,
  padding: `70px ${paddingX} 60px ${paddingX}`,
});

export const ScheduleList = styled('div', {
  marginTop: 15,
  display: 'flex',
  flexDirection: 'column',
});

export const ScheduleCard = styled(ScheduleItem, {
  margin: '15px 0',
});
