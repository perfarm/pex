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
