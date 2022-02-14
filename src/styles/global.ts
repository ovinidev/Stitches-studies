import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    fontSize: '62.5%',
    scrollBehavior: 'smooth',
  },

  button: {
    cursor: 'pointer',
  },

  '@media(min-width: 1080px)': {
    html: {
    },
  },

});
