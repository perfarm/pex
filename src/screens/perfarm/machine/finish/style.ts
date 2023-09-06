import { Typography } from '~/components/Typography';
import { styled } from '~/theme';

export const Title = styled(Typography, {
  textAlign: 'center',
});

export const Br = styled('br');

export const Image = styled('img', {
  maxWidth: '100%',
  margin: '30px auto',
});

export const Description = styled(Typography, {
  textAlign: 'center',
  marginTop: '20px',
  padding: '0 10px',
});
