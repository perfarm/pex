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
});

const line = {
  variants: {
    status: {
      PENDING: {
        backgroundColor: '$perfarmYellow',
      },
      FINALIZED: {
        backgroundColor: '$mediumGray',
      },
      IN_PROGRESS: {
        backgroundColor: '$pastureGreen',
      },
    },
  },
}

export const LineUp = styled('div', {
  position: 'absolute',
  top: 0,
  left: 15,
  width: 2,
  height: '50%',
  zIndex: 2,
}, line);

export const LineDown = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 15,
  width: 2,
  height: '50%',
  zIndex: 2,
}, line);

export const IconSpace = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '50px',
});

export const Root = styled('li', {
  display: 'flex',
  justifyContent: 'center',
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
          backgroundColor: '$perfarmYellow',
          '&:before': {
            backgroundColor: '$perfarmYellow',
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
