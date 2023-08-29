import { Button as RootButton } from '~/components/Button';
import { styled } from '~/theme';

export const Root = styled(RootButton, {
  variants: {
    hasIcon: {
      true: {
        borderRadius: '50%',
        fontSize: 0,
        height: 'unset',
        position: 'relative',

        '& > svg': {
          left: '50%',
          position: 'absolute',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        },
      },
    },

    size: {
      lg: {
        padding: '28px',

        '& > svg': {
          height: '24px',
          width: '24px',
        },
      },
      md: {
        padding: '24px',

        '& > svg': {
          height: '24px',
          width: '24px',
        },
      },
      sm: {
        padding: '20px',

        '& > svg': {
          height: '24px',
          width: '24px',
        },
      },
      xl: {
        padding: '32px',

        '& > svg': {
          height: '24px',
          width: '24px',
        },
      },
      xsm: {
        padding: '18px',

        '& > svg': {
          height: '20px',
          width: '20px',
        },
      },
      xxsm: {
        padding: '15px',

        '& > svg': {
          height: '20px',
          width: '20px',
        },
      },
    },
  },

  defaultVariants: {
    size: 'xsm',
  },
});
