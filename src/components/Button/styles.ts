import { styled } from '../../styles/stitches.config';

export const StitchesButton = styled('button', {
  border: 'none',
  fontSize: '$1',
  borderRadius: '$7',

  '&:disabled': {
    color: '#fff',
    background: '$purple',
    cursor: 'not-allowed',
  },

  variants: {
    color: {
      primary: {
        fontFamily: '$mono',
        background: '$primary',
        color: '$white',
        transition: 'all .6s ease-in-out',
        '&:hover': {
          background: '$purple',
          color: '#fff',
        },
        '@media (max-width: 600px)': {
          background: '$purple',
        },
      },
      secondary: {
        fontFamily: '$untitled',
        background: '$secondary',
        color: '$tertiary',
        transition: 'all .2s ease-in',
        '&:hover': {
          background: '$red',
        },
      },
      tertiary: {
        fontFamily: 'fantasy',
        background: '$tertiary',
        color: '$primary',
        transition: 'all .8s ease',
        '&:hover': {
          background: '$secondary',
        },
      },
    },
    size: {
      small: {
        height: '4rem',
        width: '12rem',
      },
      medium: {
        height: '4.5rem',
        width: '14rem',
      },
      large: {
        height: '5rem',
        width: '16rem',
      },
    },
  },

  defaultVariants: {
    color: 'primary',
    size: 'small',
  },

  compoundVariants: [
    {
      color: '',
      css: {
      },
    },
  ],

});
