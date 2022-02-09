import { styled } from '../../styles/stitches.config';

export const Button = styled('button', {
  border: 'none',
  cursor: 'pointer',
  margin: '$1',
  fontSize: '$1',
  borderRadius: '$7',

  // '@media (min-width: 768px)': {
  //   background: 'red',
  // },

  variants: {
    color: {
      purple: {
        color: '$red500',
        '&:hover': {
          color: '$red500',
        }
      },
      red: {
        color: '$blue500',
        '&:hover': {
          color: '$blue500',
        }
      },
      black: {
        color: '$purple500',
        '&:hover': {
          color: '$purple500',
        }
      },
      blue: {
        color: '$green500',
        '&:hover': {
          color: '$green500',
        }
      },
    },
    size: {
      small: {
        size: '8rem'
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
    size: 'small',
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