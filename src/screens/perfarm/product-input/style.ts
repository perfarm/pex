import { Typography } from '~/components/Typography';
import { styled } from '~/theme';

export const Title = styled(Typography, {
  textAlign: 'center',
});

export const Br = styled('br');

export const Description = styled(Typography, {
  textAlign: 'center',
  marginTop: '20px',
});

export const List = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});
