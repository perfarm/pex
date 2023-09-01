import { Button as OriginalButton } from '~/components/Button';
import { styled } from '~/theme';

export const Page = styled('div', {
  height: '100vh',
  justifyContent: 'center',
});

export const TwoColorsContainer = styled('div', {
  background: 'linear-gradient($pastureGreen 55%, $lighterGray 50%)',
  padding: 30,
  paddingBottom: 0,
});

export const Button = styled(OriginalButton, {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginTop: 20,
});