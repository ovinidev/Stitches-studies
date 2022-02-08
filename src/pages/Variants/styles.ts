import { styled } from '../../styles/stitches.config';

export const Button = styled('button', {
  borderRadius: 3,
  border: 'none',
  cursor: 'pointer',
  margin: 10,

  variants: {
    color: {
      purple: {
        color: 'purple',
        '&:hover': {
          color: 'black',
        }
      },
      red: {
        color: 'red',
        '&:hover': {
          color: 'white',
        }
      },
      black: {
        color: 'black',
        '&:hover': {
          color: 'red',
        }
      },
      blue: {
        color: 'blue',
        '&:hover': {
          color: 'pink',
        }
      },
    },
    size: {
      small: {
        height: '2rem',
        width: '6rem',
      },
      medium: {
        height: '4rem',
        width: '8rem',
      },
      big: {
        height: '6rem',
        width: '10rem',
      },
      large: {
        height: '8rem',
        width: '12rem',
      }
    },
    disabled: {
      true: {
        background: 'black',
        cursor: 'not-allowed',
      },
    }
  },

  defaultVariants: {
    color: 'purple',
    size: 'medium',
  },

  compoundVariants: [
    {
      color: 'red',
      size: 'big',
      css: {
        "&:hover": {
          background: 'pink',
          color: 'black',
        }
      }
    }
  ],

});