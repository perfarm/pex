import { ImageResponsive } from '~/commons/variants/components';
import { Button } from '~/components/Button';
import { DownloadSimple } from '~/components/Icons';
import { Typography } from '~/components/Typography';
import { styled } from '~/theme';

export const Root = styled('div', {});

export const Img = styled(ImageResponsive, {
  marginTop: 15,
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
