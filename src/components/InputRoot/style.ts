import { keyframes } from '@stitches/react';

import { variantFontSize, variantPadding } from '~/commons/variants/sizes';
import { styled } from '~/theme';

export const Content = styled('div', {
  position: 'relative',
});

export const Icon = styled('label', variantPadding, {
  alignItems: 'center',
  color: '$gray',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  padding: '$3',
  position: 'relative',

  '&:before': {
    backgroundColor: '$lightGray',
    content: '',
    height: '55%',
    left: '100%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 1,
  },
});

export const InputContent = styled('div', {
  alignItems: 'center',
  backgroundColor: '$white',
  border: '1px solid $gray200',
  borderRadius: '$3',
  display: 'flex',
  justifyContent: 'space-between',
  outline: '2px solid transparent',
  position: 'relative',
  transition: '$easeInOut02',

  variants: {
    disabled: {
      true: {
        backgroundColor: '$gray200',
        border: '1px solid $gray300',
        cursor: 'not-allowed',
        opacity: '0.9',

        '&:hover,&:focus-within': {
          outlineColor: 'transparent',
        },
      },
    },
    hasError: {
      true: {
        border: '1px solid $warningRedAlert',
        backgroundColor: '$warningRedWhitened',

        [`${Icon}`]: {
          '&:before': {
            backgroundColor: '$warningRedAlert',
          },
        },
      },
    },
  },
});

const moveDown = keyframes({
  '0%': { opacity: 0, top: '0', visibility: 'hidden' },
  '100%': { opacity: 1, top: '100%', visibility: 'visible' },
});

export const Error = styled('label', {
  animation: `${moveDown} 200ms`,
  animationFillMode: 'forwards',
  backgroundColor: '$warningRedLighter',
  color: '$warningRedDark',
  left: 0,
  marginTop: 0,
  opacity: 0,
  padding: '$3',
  position: 'absolute',
  top: '0',
  visibility: 'hidden',
  width: '100%',
  zIndex: -1,
});

export const Root = styled('div', variantFontSize, {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  position: 'relative',
});
