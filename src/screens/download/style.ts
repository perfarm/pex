import { Button } from '~/components/Button';
import { DownloadSimple } from '~/components/Icons';
import { Typography } from '~/components/Typography';
import { styled } from '~/theme';

export const Root = styled('div', {});

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
  marginBottom: '5px',
});

export const Subtitle = styled(Typography, {
  textAlign: 'center',
});

export const Description = styled(Subtitle, {
  margin: '20px auto',
  maxWidth: '250px',
});

export const Br = styled('br');

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
