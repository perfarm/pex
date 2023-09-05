import Image from 'next/image';
import { styled } from '~/theme';

export const Root = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  margin: '30px auto',
});

export const ImageMachine = styled(Image, {
  position: 'relative',
  zIndex: '2',
});

export const Background = styled(Image, {
  position: 'absolute',
  zIndex: '1',
  top: '100px',
  left: '30px',
});
