import { styled } from '~/theme';

export const Button = styled('button', {
  borderRadius: '$3',
  borderWidth: '1px',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontWeight: '$bold',
  opacity: '0.8',
  transition: '$easeInOut02',

  '&:hover': {
    opacity: '0.9',
  },

  '&:active': {
    opacity: '1.0',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: '0.4',
  },

  defaultVariants: {
    color: 'primary',
    size: 'xsm',
    variant: 'contained',
  },
  variants: {
    color: {
      black: {
        backgroundColor: '$black',
        borderColor: '$black',
        color: '$white',
      },
      error: {
        backgroundColor: '$warningRedAlert',
        borderColor: 'transparent',
        color: '$white',
      },
      gray: {
        backgroundColor: '$gray',
        borderColor: '$transparent',
        color: '$white',
      },
      primary: {
        backgroundColor: '$pastureGreen',
        borderColor: 'transparent',
        color: '$white',
      },
      secondary: {
        backgroundColor: '$resourceYellow',
        borderColor: 'transparent',
        color: '$white',
      },
      white: {
        backgroundColor: '$white',
        borderColor: 'transparent',
        color: '$gray',
      },
    },

    size: {
      lg: {
        fontSize: '$body3',
        height: '56px',
        paddingX: '15px',
      },
      md: {
        fontSize: '$body4',
        height: '48px',
        paddingX: '15px',
      },
      sm: {
        fontSize: '$body5',
        height: '40px',
        paddingX: '15px',
      },
      xl: {
        fontSize: '$body2',
        height: '64px',
        paddingX: '15px',
      },
      xsm: {
        fontSize: '$body5',
        height: '36px',
        paddingX: '10px',
      },
      xxsm: {
        fontSize: '$body6',
        height: '30px',
        paddingX: '10px',
      },
    },

    fullWidth: {
      true: {
        width: '100%',
      },
    },

    variant: {
      contained: {},
      outlined: {
        backgroundColor: 'transparent',
      },
      text: {
        backgroundColor: 'unset',
      },
    },
  },

  compoundVariants: [
    {
      color: 'black',
      css: {
        textColor: '$black',
      },
      variant: 'text',
    },
    {
      color: 'black',
      css: {
        outlineColor: '$black',
      },
      variant: 'outlined',
    },

    {
      color: 'white',
      css: {
        textColor: '$white',
      },
      variant: 'text',
    },
    {
      color: 'white',
      css: {
        outlineColor: '$white',
      },
      variant: 'outlined',
    },

    {
      color: 'primary',
      css: {
        textColor: '$pastureGreen',
      },
      variant: 'text',
    },
    {
      color: 'primary',
      css: {
        outlineColor: '$pastureGreen',
      },
      variant: 'outlined',
    },

    {
      color: 'gray',
      css: {
        textColor: '$gray',
      },
      variant: 'text',
    },
    {
      color: 'gray',
      css: {
        outlineColor: '$gray',
      },
      variant: 'outlined',
    },

    {
      color: 'secondary',
      css: {
        textColor: '$resourceYellow',
      },
      variant: 'text',
    },
    {
      color: 'secondary',
      css: {
        textColor: '$resourceYellow',
      },
      variant: 'outlined',
    },

    {
      color: 'error',
      css: {
        textColor: '$warningRedAlert',
      },
      variant: 'text',
    },
    {
      color: 'error',
      css: {
        outlineColor: '$warningRedAlert',
      },
      variant: 'outlined',
    },
  ],
});
