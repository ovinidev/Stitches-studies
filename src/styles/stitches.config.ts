import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  utils: {
    // Abbreviated margin properties
    m: (value: string | number) => ({
      margin: value,
    }),
    mt: (value: string | number) => ({
      marginTop: value,
    }),
    mr: (value: string | number) => ({
      marginRight: value,
    }),
    mb: (value: string | number) => ({
      marginBottom: value,
    }),
    ml: (value: string | number) => ({
      marginLeft: value,
    }),
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // A property for applying width/height together
    size: (value: string | number) => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value: string | number) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // An abbreviated property for border-radius
    br: (value: string | number) => ({
      borderRadius: value,
    }),
  },
  theme: {
    colors: {
      gray500: '',
      blue500: '',
      purple500: '',
      green500: '',
      red500: '',
    },
    space: {
      1: '4rem',
      2: '6rem',
      3: '8rem',
      4: '8rem',
      5: '8rem',
    },
    fontSizes: {
      1: '1.6rem',
      2: '2.2rem',
      3: '3rem',
    },
    fonts: {
      untitled: 'Untitled Sans, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    media: {
      bp1: '(min-width: 640px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
    },
    fontWeights: {},
    lineHeights: {
      8: '2px',
    },
    letterSpacings: {},
    sizes: {
      1: '2rem',
      2: '2rem',
    },
    borderWidths: {
      5: '5px',
    },
    borderStyles: {
      9: '5px',
    },
    radii: {
      7: '50px'
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  }
});