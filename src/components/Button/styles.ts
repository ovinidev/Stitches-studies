import { styled } from '../../styles/stitches.config';

export const StitchesButton = styled('button', {
  border: 'none',
  fontSize: '$1',
  borderRadius: '$7',
  height: '4rem',
  width: '12rem',

  // '@media (min-width: 768px)': {
  //   background: 'red',
  // },

  '&:disabled': {
    color: '#fff',
    background: '$purple',
    cursor: 'not-allowed',
  },

  variants: {
    color: {
      primary: {
        background: '$primary',
        color: '$',
        transition: 'all .6s ease-in-out',
        '&:hover': {
          background: '$purple',
          color: '#fff'
        }
      },
      secondary: {
        background: '$secondary',
        color: '$',
        transition: 'all .2s ease-in',
        '&:hover': {
          background: '$red',
        }
      },
      tertiary: {
        background: '$tertiary',
        color: '$',
        transition: 'all .8s ease',
        '&:hover': {
          background: '$primary',
        }
      },
    },
  },

  defaultVariants: {
    color: 'primary',
  },

  compoundVariants: [
    {
      color: '',
      css: {
      }
    }
  ],

});