import { styled } from '~/theme';

export const Root = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  width: '100%',

  variants: {
    position: {
      absolute: {
        left: 0,
        position: 'absolute',
        top: 0,
        zIndex: '$tooltip',
      },
      fixed: {
        left: 0,
        position: 'fixed',
        top: 0,
        zIndex: '$tooltip',
      },
      static: {
        position: 'static',
      },
    },
  },
});

export const DescriptionContainer = styled('div', {});

export const Description = styled('p', {
  color: '$gray',
  fontSize: '$body3',
  fontWeight: 'bold',
  marginY: '15px',
  paddingX: '15px',
  textAlign: 'center',
});

export const Img = styled('img');
