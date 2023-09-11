import { Button } from '~/components/Button';
import { styled } from '~/theme';

export const Root = styled('div', {
  marginTop: '30px',
  display: 'flex',
});

export const ButtonBack = styled(Button, {
  backgroundColor: 'orange',
  width: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '30px',
  padding: 'unset !important',
});

export const ButtonNext = styled(Button, {
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
});
