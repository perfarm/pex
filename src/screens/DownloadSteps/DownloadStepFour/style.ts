import { Typography } from '~/components/Typography';
import { styled } from '~/theme';

export const Root = styled('div');

export const BodyContent = styled('div', {
  padding: '30px 30px 90px 30px',
});

export const Title = styled(Typography, {
  textAlign: 'center',
  marginTop: '15px',
  marginBottom: '15px',
});

export const Description = styled(Typography, {
  textAlign: 'center',
  margin: '20px auto 0 auto',
  maxWidth: '285px',
});

export const TitleConclusion = styled(Typography, {
  marginRight: '10px',
});

export const Content = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '40px',
  alignItems: 'center',
});
