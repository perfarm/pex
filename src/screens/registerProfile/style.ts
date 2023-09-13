import { TextField } from '~/components/TextField';
import { styled } from '~/theme';

export const Root = styled('div', {
  backgroundColor: '$lighterGray',
  padding: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Input = styled(TextField, {
  marginTop: '15px',
});
