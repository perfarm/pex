import { Button as OriginalButton } from '~/components/Button';
import { styled } from '~/theme';

export const Page = styled('div', {
  height: '100vh',
  justifyContent: 'center',
});

export const Button = styled(OriginalButton, {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginTop: 20,
});