import { createCss } from '@stitches/react'

export const { styled, css, global, keyframes, getCssString, theme } =
  createCss({
    theme: {
      colors: {
        colorPrimary: '#c69963',
        colorPrimaryShade: 'hsl(32, 39%, 51%)',
        colorSecondary: 'hsl(212, 47%, 12%)',
        colorSecondaryShade: 'hsl(212, 47%, 2%)',

        gray100: 'hsl(206,22%,99%)',
        gray200: 'hsl(206,12%,97%)',
        gray300: 'hsl(206,11%,92%)',
        gray400: 'hsl(206,10%,84%)',
        gray500: 'hsl(206,10%,76%)',
        gray600: 'hsl(206,10%,44%)',
      },
      space: {
        'space-100': '0.75rem',
        'space-200': '1rem',
        'space-300': '1.33rem',
        'space-400': '1.77rem',
        'space-500': '2.36rem',
        'space-600': '3.15rem',
        'space-700': '4.2rem',
        'space-800': '5.6rem',
        'space-900': '6.9rem',
      },
      fontSizes: {
        1: '2.488rem',
        2: '2.074rem',
        3: '1.728rem',
        4: '1.44rem',
        5: '1.2rem',
        default: '',
        small: '0.833rem',
      },
      fonts: {
        display: `'Josefin Sans', sans-serif`,
        body: 'Nunito Sans sans-serif',
      },
      fontWeights: {},
      lineHeights: {},
      letterSpacings: {},
      sizes: {},
      borderWidths: {},
      borderStyles: {},
      radii: {},
      shadows: {},
      zIndices: {},
      transitions: {},
    },
    //  media query
    media: {
      bp1: '(min-width: 480px)',
    },
    //  all utility things here
    utils: {
      marginX: config => value => ({ marginLeft: value, marginRight: value }),
    },
    prefix: {},
    themeMap: {},
  })

export const darkTheme = theme({})
