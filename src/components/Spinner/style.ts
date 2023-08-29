import { keyframes } from '@stitches/react';

import { styled } from '~/theme';

const ldsRing = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
    transformOrigin: 'center',
  },
  '100%': { transform: 'rotate(360deg)' },
});

export const Root = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const Spinner = styled('div', {
  display: 'inline-block',
  height: '25px',
  position: 'relative',
  width: '25px',

  '& div': {
    animation: `${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
    border: '2px solid #fff',
    borderColor: 'inherit',
    borderRadius: '50%',
    boxSizing: 'border-box',
    display: 'block',
    height: '15px',
    left: '50%',
    top: '50%',
    marginLeft: -7.5,
    marginTop: -7.5,
    position: 'absolute',
    width: '15px',
    zIndex: 10,
  },

  '& div:nth-child(1)': {
    animationDelay: '-0.45s',
  },

  '& div:nth-child(2)': {
    animationDelay: '-0.3s',
  },

  '& div:nth-child(3)': {
    animationDelay: '-0.15s',
  },

  variants: {
    color: {
      pastureGreen: {
        borderColor: '$pastureGreen transparent transparent transparent',
      },
      white: {
        borderColor: '$white transparent transparent transparent',
      },
    },
  },
});
