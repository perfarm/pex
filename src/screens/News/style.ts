import { Typography } from '~/components/Typography';
import { styled } from '~/theme';

export const Page = styled('div', {
  minHeight: '100vh',
  justifyContent: 'center',
  overflow: 'auto',
  paddingBottom: 30,
});

export const TitleContainer = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-start',
  marginBottom: 30,
});

export const ImageContainer = styled('div', {
  height: 160,
  borderRadius: '$5',
});

export const ImageContent = styled('div', {
  borderRadius: '$5',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%',
});

export const Title = styled(Typography, {
  marginTop: 15,
});

export const Description = styled(Typography, {
  marginTop: 15,
  whiteSpace: 'break-spaces',
});
