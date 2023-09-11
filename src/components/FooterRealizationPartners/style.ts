import { styled } from '~/theme';
import { Typography } from '../Typography';

const footerHeightSize = '170px';

export const Root = styled('div', {
  minHeight: footerHeightSize,
});

export const ContentAbsolute = styled('div', {
  padding: '30px 30px 0 30px',
  height: footerHeightSize,
  backgroundColor: '$pastureGreen',
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
});

export const Title = styled(Typography);
