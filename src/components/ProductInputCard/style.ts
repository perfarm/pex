import { Typography } from '~/components/Typography';
import { styled } from '~/theme';

export const Description = styled(Typography, {
  color: '$gray',
  transition: '$easeInOut02',
  textAlign: 'center',
});

export const Title = styled(Typography, {
  color: '$pastureGreen',
  transition: '$easeInOut02',
  textAlign: 'center',
  marginTop: 10,
  marginBottom: 5,
});

export const Img = styled('img', {
  display: 'block',
  maxWidth: '100%',
  filter: 'grayscale(1)',
  opacity: 0.5,
});

export const ImgContent = styled('div', {
  transition: '$easeInOut02',
});

export const Root = styled('div', {
  background: '$white',
  borderRadius: '$5',
  width: '100%',
  boxShadow: '0px 1px 11px -1px rgba(73, 73, 73, 0.06), 0px 4px 24px -3px rgba(0, 0, 0, 0.12)',
  marginTop: '15px',
  minHeight: '60px',
  padding: '10px',
  display: 'flex',
  flex: 1,
  justifyContent: 'start',
  alignItems: 'center',
  transition: '$easeInOut02',
  cursor: 'pointer',
  flexDirection: 'column',

  '&:active': {
    boxShadow: '0px 1px 11px -1px rgba(73, 73, 73, 0.1), 0px 4px 24px -3px rgba(0, 0, 0, 0.2)',
    transform: 'scale(0.98)',
    transition: 'unset',
  },
  variants: {
    isActive: {
      true: {
        cursor: 'not-allowed',
        transition: 'unset',
        transform: 'unset',

        [`${Img}`]: {
          filter: 'grayscale(0)',
          opacity: 1,
        },
        [`${Title}`]: {
          color: '$pastureGreen !important',
        },
        [`${Description}`]: {
          color: '$gray',
        },

        '&:active': {
          transition: 'unset',
          transform: 'unset',
          boxShadow: '0px 1px 11px -1px rgba(73, 73, 73, 0.06), 0px 4px 24px -3px rgba(0, 0, 0, 0.12)',
        },
      },
      false: {
        [`${Title}`]: {
          color: '$mediumGray !important',
        },
        [`${Description}`]: {
          color: '$mediumGray',
        },
      },
    },
    hasError: {
      true: {
        boxShadow: '0px 1px 11px -1px rgba(243, 78, 78, 0.6), 0px 4px 24px -3px rgba(0, 0, 0, 0.12)',
        [`${Description}`]: {
          color: '$warningRedAlert !important',
        },
        [`${Title}`]: {
          color: '$warningRedAlert !important',
        },
      }
    }
  },
});
