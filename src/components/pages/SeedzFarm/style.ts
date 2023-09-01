import { Typography } from '~/components/Typography';
import { styled } from '~/theme';

export const Page = styled('div', {
  height: '100vh',
  justifyContent: 'center',
  overflow: 'auto',
});

export const Title = styled(Typography, {
  marginBottom: 10,
  marginTop: 20,
});


export const Container = styled('div', {
  padding: '0 30px',
});
