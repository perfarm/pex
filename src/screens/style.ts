import { Button } from '~/components/Button';
import { Card } from '~/components/Card';
import { CaretRight } from '~/components/Icons';
import { TextField } from '~/components/TextField';
import { Typography } from '~/components/Typography';
import { styled } from '~/theme';

export const Root = styled('div', {
  backgroundColor: '$lighterGray',
  padding: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const CardContainer = styled(Card, {
  marginTop: '30px',
  justifyContent: 'center',
  backgroundColor: '$white',
  padding: '30px',
  display: 'flex',
  flexDirection: 'column',

  maxWidth: '$minScreenWidth',
});

export const Line = styled('div', {
  backgroundColor: 'Green',
  height: '30px',
  display: 'flex',
});

export const Input = styled(TextField, {
  marginTop: '30px',
});

export const Title = styled(Typography, {
  whiteSpace: 'nowrap',
  marginTop: '20px',
});

export const ButtonNext = styled(Button, {
  marginTop: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const IconRight = styled(CaretRight, {
  marginLeft: '10px',
});
