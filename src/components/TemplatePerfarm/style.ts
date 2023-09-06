import { styled } from '~/theme';
import { Typography } from '../Typography';

import { TwoColorsContainer as OriginalTwoColorsContainer } from '~/components/TwoColorsContainer';

export const TwoColorsContainer = styled(OriginalTwoColorsContainer, {
  background: 'linear-gradient(var(--colors-pastureGreen) 240px, var(--colors-lighterGray) 20px)',
  padding: '30px 0',
});

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
