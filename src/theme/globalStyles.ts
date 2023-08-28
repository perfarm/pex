import { globalCss } from '.';

export const globalStyles = globalCss({
  '@import': "url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;700&display=swap')",

  ':root': {
    fontSize: '62.5%',
  },

  '*, &::after, &::before': {
    boxSizing: 'border-box',
  },

  body: {
    fontFamily: '$montserrat',
    margin: 0,
    maxWidth: '100%',
    minHeight: '100%',
    minWidth: '360px',
    wordBreak: 'normal',
    wordWrap: 'break-word',
  },

  'button, div,a': {
    outline: 'none',
  },

  p: {
    margin: '0px',
  },

  /* ------------------ */
  /* Select Shadows */
  '::-moz-selection': {
    backgroundColor: '$blackOpacity5',
  },
  '::selection': {
    backgroundColor: '$blackOpacity3',
  },

  /* ------------------ */
  /* Scrollbar */
  '::-webkit-scrollbar': {
    height: '8px',
    width: '8px',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$mediumGray',
    borderRadius: '100px',
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: '$lighterGray',
    borderRadius: '100px',
  },

  'body > [data-radix-popper-content-wrapper]': {
    zIndex: '$tooltip!important',
  },
});
