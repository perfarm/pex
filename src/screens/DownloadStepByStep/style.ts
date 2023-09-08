import { Button } from '~/components/Button';
import { DownloadSimple } from '~/components/Icons';
import { Typography } from '~/components/Typography';
import { styled } from '~/theme';

export const Root = styled('div', {});

export const Img = styled('img', {
  marginTop: 15,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'block',
  width: 250,
  maxWidth: '100%',
});

export const BodyContent = styled('div', {
  padding: '30px',
});
export const FooterContent = styled('div', {
  padding: '30px 30px 80px 30px',
  backgroundColor: '$pastureGreen',
});
export const Container = styled('div', {
  maxWidth: '$minScreenWidth',
  margin: 'auto',
});

export const Title = styled(Typography, {
  textAlign: 'center',
  marginTop: '15px',
  marginBottom: '15px',
});

export const Subtitle = styled(Typography, {
  textAlign: 'center',
});

export const Description = styled(Subtitle, {
  margin: '20px auto',
  maxWidth: '250px',
});

export const Br = styled('br');

export const Strong = styled('strong');

export const ButtonDownload = styled(Button, {
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
  margin: '0 auto 20px auto',
});
export const IconDownload = styled(DownloadSimple, {
  marginLeft: '10px',
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
