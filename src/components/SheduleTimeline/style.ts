import { styled } from '~/theme';

export const IconContent = styled('div', {
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$white',
  backgroundColor: '$mediumGray',
  position: 'relative',
  zIndex: 3,

  '&:before': {
    content: '',
    left: '50%',
    top: 0,
    transform: 'translate(-50%, -100%)',
    backgroundColor: '$mediumGray',
    height: '600px',
    width: '2px',
    position: 'absolute',
    zIndex: -1,
  },
});

export const IconSpace = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '50px',
});

export const Root = styled('li', {
  display: 'flex',
  justifyContent: 'center',
  padding: '15px 0',
  marginBottom: '2px',
  zIndex: 3,
  position: 'relative',

  [`&:first-child ${IconContent}`]: {
    '&:before': {
      backgroundColor: '$lighterGray',
    },
  },

  variants: {
    status: {
      PENDING: {
        [`${IconContent}`]: {
          backgroundColor: '$resourceYellow',
          '&:before': {
            backgroundColor: '$resourceYellow',
          },
        },
      },
      FINALIZED: {
        [`${IconContent}`]: {
          backgroundColor: '$mediumGray',
          '&:before': {
            backgroundColor: '$mediumGray',
          },
        },
      },
      IN_PROGRESS: {
        [`${IconContent}`]: {
          backgroundColor: '$pastureGreen',
          '&:before': {
            backgroundColor: '$pastureGreen',
          },
        },
      },
    },
  },
});
