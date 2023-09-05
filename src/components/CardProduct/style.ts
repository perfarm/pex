import { Typography } from '~/components/Typography';
import { styled } from '~/theme';

export const Description = styled(Typography, {
  transition: '$easeInOut02',
});

export const Img = styled('img');

export const ImgContent = styled('div', {
  backgroundColor: '$mediumGray',
  borderRadius: '10px',
  transition: '$easeInOut02',
  height: '55px',
  width: '55px',
  padding: '10px',
  display: 'flex',
  marginRight: '15px',
  justifyContent: 'start',
  alignItems: 'center',
});

export const Root = styled('div', {
  background: '$white',
  borderRadius: '$5',
  width: '100%',
  boxShadow: '0px 1px 11px -1px rgba(73, 73, 73, 0.06), 0px 4px 24px -3px rgba(0, 0, 0, 0.12)',
  marginTop: '20px',
  minHeight: '60px',
  padding: '10px',
  display: 'flex',
  flex: 1,
  justifyContent: 'start',
  alignItems: 'center',
  transition: '$easeInOut02',
  cursor: 'pointer',

  '&:hover': {
    [`${ImgContent}`]: {
      backgroundColor: '$pastureGreen',
    },
    [`${Description}`]: {
      color: '$pastureGreen',
    },
  },
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

        [`${ImgContent}`]: {
          backgroundColor: '$pastureGreen',
        },
        [`${Description}`]: {
          color: '$pastureGreen',
        },

        '&:active': {
          transition: 'unset',
          transform: 'unset',
          boxShadow: '0px 1px 11px -1px rgba(73, 73, 73, 0.06), 0px 4px 24px -3px rgba(0, 0, 0, 0.12)',
        },
      },
    },
    hasError: {
      true: {
        boxShadow: '0px 1px 11px -1px rgba(243, 78, 78, 0.6), 0px 4px 24px -3px rgba(0, 0, 0, 0.12)',
        [`${ImgContent}`]: {
          backgroundColor: '$warningRedAlert',
        },
        [`${Description}`]: {
          color: '$warningRedAlert',
        },
      }
    }
  },
});
