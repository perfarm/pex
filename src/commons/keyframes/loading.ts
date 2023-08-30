import { keyframes } from '@stitches/react';

export const keyframesLoading = keyframes({
  from: {
    transform: 'rotate(0)',
    transformOrigin: 'center',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});
