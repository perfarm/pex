import { Typography } from '~/components/Typography';
import { styled } from '~/theme';

export const Title = styled(Typography, {
  textAlign: 'center',
});

export const Br = styled('br');

export const Description = styled(Typography, {
  textAlign: 'center',
  marginTop: '20px',
  marginBottom: '30px',
  padding: '0 10px',
});
