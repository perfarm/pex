import { Typography } from '~/components/Typography';
import { styled } from '~/theme';

import { TwoColorsContainer as OriginalTwoColorsContainer } from '~/components/TwoColorsContainer';

export const TwoColorsContainer = styled(OriginalTwoColorsContainer, {
  background: 'linear-gradient(var(--colors-pastureGreen) 240px, var(--colors-lighterGray) 20px)',
  padding: '30px 0',
});


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
