import { CardProduct } from '~/components/CardProduct';
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
  padding: `70px ${paddingX} 30px ${paddingX}`,
  textAlign: 'center',
});

export const Subtitle = styled(Typography, {});

export const Block = styled('div', {
  marginTop: 15,
  backgroundColor: 'violet',
  minHeight: '60px',
});
