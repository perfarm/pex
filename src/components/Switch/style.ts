import { Root as RadixSwitchRoot, Thumb as RadixSwitchThumb } from '@radix-ui/react-switch';

import { styled } from '~/theme';

const areaSize = 24;
const areaThumb = areaSize - 6;

export const Root = styled('div', {
  alignItems: 'center',
  display: 'flex',
  height: `${areaSize}px`,
});

export const Label = styled('label', {
  color: '$gray',
  cursor: 'pointer',
  fontWeight: '$medium',
  fontX: '$body5',
  userSelect: 'none',
});

export const SwitchThumb = styled(RadixSwitchThumb, {
  backgroundColor: 'white',
  border: 'none',
  borderRadius: '9999px',
  boxShadow: '0px 2px 4px -1px rgba(73, 73, 73, 0.08), 0px 2px 6px -1px rgba(0, 0, 0, 0.15)',
  display: 'block',
  height: `${areaThumb}px`,
  left: '3px',
  position: 'absolute',
  top: '3px',
  transform: 'translateX(0)',
  transition: 'transform 100ms',
  width: `${areaThumb}px`,
  willChange: 'transform',
});

export const SwitchRoot = styled(RadixSwitchRoot, {
  backgroundColor: '$mediumGray',
  border: 'none',
  borderRadius: '9999px',
  cursor: 'pointer',
  height: '100%',
  marginRight: '10px',
  minWidth: `${areaSize * 2}px`,
  overflow: 'hidden',
  position: 'relative',
  WebkitTapHighlightColor: 'transparent',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: '0.4',
  },

  variants: {
    checked: {
      true: {
        backgroundColor: '$pastureGreen',

        [`${SwitchThumb}`]: {
          transform: `translateX(${areaSize}px)`,
        },
      },
    },
  },
});
