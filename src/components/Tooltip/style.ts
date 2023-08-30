import {
  Arrow as TooltipArrow,
  Content as TooltipContent,
  Portal as TooltipPortal,
  Provider as TooltipProvider,
  Root as TooltipRoot,
  Trigger as TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { keyframes } from '@stitches/react';

import { styled } from '~/theme';

export const Provider = styled(TooltipProvider, {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  position: 'relative',
});

export const Root = styled(TooltipRoot, {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  position: 'relative',
});

export const Container = styled('div', {
  '& [data-radix-popper-content-wrapper]': {
    zIndex: '$tooltip!important',
  },
});

export const Trigger = styled(TooltipTrigger, {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  position: 'relative',
});

export const TriggerWrap = styled('div', {});

export const Portal = styled(TooltipPortal, {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
});

const revealByOpacity = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const Arrow = styled(TooltipArrow, {
  fill: '$white',
});

export const ContentWrap = styled('div', {
  fontX: '$body4',
  maxWidth: '400px',
  overflow: 'auto',
  padding: '$3 $4',

  defaultVariants: { maxHeight: 'medium' },

  variants: {
    maxHeight: {
      large: { maxHeight: '300px' },
      medium: { maxHeight: '150px' },
      small: { maxHeight: '75px' },
    },
  },
});

export const Content = styled(TooltipContent, {
  animationDuration: '250ms',
  animationName: `${revealByOpacity}`,
  animationTimingFunction: 'cubicbezier(0.16, 1, 0.3, 1)',
  borderRadius: '$3',
  borderStyle: 'solid',
  borderWidth: '2px',
  boxShadow: '$1',
  lineHeight: 1,
  maxWidth: '90vw',
  userSelect: 'none',
  willchange: 'transform, opacity',

  defaultVariants: { color: 'black' },
  variants: {
    color: {
      black: {
        backgroundColor: '$darkGray',
        borderColor: '$darkGray',
        color: '$lighterGray',

        [`& ${Arrow}`]: {
          fill: '$darkGray',
        },
      },
      primary: {
        backgroundColor: '$pastureGreenLighter',
        borderColor: '$pastureGreen',
        color: '$pastureGreenDark',

        [`& ${Arrow}`]: {
          fill: '$pastureGreen',
        },
      },
      white: {
        backgroundColor: '$lighterGray',
        borderColor: '$gray',
        color: '$darkGray',

        [`& ${Arrow}`]: {
          fill: '$gray',
        },
      },

      secondary: {
        backgroundColor: '$resourceYellowLighter',
        borderColor: '$resourceYellow',
        color: '$resourceYellowDark',

        [`& ${Arrow}`]: {
          fill: '$resourceYellow',
        },
      },
    },
  },
});
