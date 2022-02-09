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
      purple: {
        color: '$',
        '&:hover': {
        }
      },
      red: {
        color: '$',
        '&:hover': {
        }
      },
      black: {
        color: '$',
        '&:hover': {
        }
      },
      blue: {
        color: '$',
        '&:hover': {
        }
      },
    },
  },

  defaultVariants: {
    color: '',
  },

  compoundVariants: [
    {
      color: '',
      css: {
      }
    }
  ],

});