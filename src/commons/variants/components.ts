import { Button } from '~/components/Button';
import { Card } from '~/components/Card';
import { CaretRight } from '~/components/Icons';
import { Typography } from '~/components/Typography';
import { styled } from '~/theme';

export const CardContainer = styled(Card, {
  justifyContent: 'center',
  backgroundColor: '$white',
  padding: '30px',
  display: 'flex',
  flexDirection: 'column',

  maxWidth: '$minScreenWidth',
});

export const Title = styled(Typography, {
  whiteSpace: 'nowrap',
  marginTop: '20px',
});

export const ButtonContent = styled('div', {
  marginTop: '50px',
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

export const IconRight = styled(CaretRight, {
  marginLeft: '10px',
});

export const Br = styled('br');

export const Strong = styled('strong');

export const Container = styled('div', {
  maxWidth: '$minScreenWidth',
  margin: 'auto',
});
