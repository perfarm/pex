import { styled } from '~/theme';
import { Typography } from '../Typography';

export const Root = styled('div', {
  padding: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const List = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const Description = styled(Typography, {
  transition: '$easeInOut02',
});
