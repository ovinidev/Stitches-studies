import { styled } from '../../styles/stitches.config';

export const StitchesTitle = styled('h1', {
  mb: '1rem',

  variants: {
    font: {
      primary: {
        fontFamily: 'fantasy',
        color: '$primary',
      },
      secondary: {
        fontFamily: 'sans-serif',
        color: '$secondary',
      },
      tertiary: {
        fontFamily: 'monospace',
        color: '$tertiary',
      },
    },
    size: {
      small: {
        fontSize: '$1',
      },
      medium: {
        fontSize: '$2',
      },
      large: {
        fontSize: '$3',
      },
    },
    uppercase: {
      true: {
        textTransform: 'uppercase',
      },
    },
  },

  compoundVariants: [
    {
      font: 'primary',
      size: 'medium',
      uppercase: true,
      css: {
        background: '$purple',
        color: '$white',
        fontSize: '$4',
      },
    },
  ],

  defaultVariants: {
    font: 'secondary',
    size: 'large',
  },

});
