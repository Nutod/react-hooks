import { createCss } from '@stitches/react'

export const { styled, css, global, keyframes, getCssString, theme } =
  createCss({
    theme: {
      colors: {
        gray100: '#f8f9fa',
        gray200: '#f1f3f5',
        gray300: '#e9ecef',
        gray400: '#dee2e6',
        gray500: '#ced4da',
        gray600: '#adb5bd',
        gray700: '#868e96',
        gray800: '#495057',
        gray900: '#343a40',

        'color-primary': 'hsl(33, 46%, 58%)',
        'color-primary-shade': 'hsl(32, 39%, 51%)',
        'color-secondary': 'hsl(211, 48%, 12%)',
        'color-secondary-shade': 'hsl(212, 47%, 2%)',
      },
      // spacing
      space: {
        100: '0.75rem',
        200: '1rem',
        300: '1.33rem',
        400: '1.77rem',
        500: '2.36rem',
        600: '3.15rem',
        700: '4.2rem',
        800: '5.6rem',
        900: '6.9rem',
      },
      // width and height
      sizes: {
        100: '0.875rem',
        200: '1rem',
        300: '1.125rem',
        400: '1.25rem',
        500: '1.5rem',
        600: '1.75rem',
        700: '2rem',
        800: '2.25rem',
        900: '2.5rem',
      },
      fontSizes: {
        'fs-2xs': '0.625rem',
        'fs-xs': '0.75rem',
        'fs-sm': '0.875rem',
        'fs-md': '1rem',
        'fs-lg': '1.125rem',
        'fs-xl': '1.25rem',
        'fs-2xl': '1.5rem',
        'fs-3xl': '1.75rem',
        'fs-4xl': '2rem',
        'fs-5xl': '2.25rem',
        'fs-6xl': '2.5rem',
        'fs-7xl': '3rem',
        'fs-8xl': '3.5rem',
        'fs-9xl': '4rem',
        'fs-10xl': '4.5rem',
      },
      fonts: {
        primary: 'Nunito, sans-serif',
        display: 'Josefin Sans, sans-serif',
      },
      fontWeights: {
        'fw-ultralight': 100,
        'fw-extralight': 200,
        'fw-light': 300,
        'fw-regular': 400,
        'fw-medium': 500,
        'fw-semibold': 600,
        'fw-bold': 700,
        'fw-extrabold': 800,
        'fw-ultrabold': 900,
      },
      lineHeights: {
        'lh-leading-tightest': 1.125,
        'lh-leading-tighter': 1.25,
        'lh-leading-tight': 1.375,
        'lh-leading-normal': 1.5,
        'lh-leading-loose': 1.625,
        'lh-leading-looser': 1.75,
        'lh-leading-loosest': 1.875,
      },
      letterSpacings: {
        'ls-tracking-tightest': '-0.08em',
        'ls-tracking-tighter': '-0.04em',
        'ls-tracking-tight': '-0.02em',
        'ls-tracking-normal': '0',
        'ls-tracking-loose': '0.02em',
        'ls-tracking-looser': '0.04em',
        'ls-tracking-loosest': '0.08em',
      },
      borderWidths: {},
      borderStyles: {},
      radii: {
        'radius-2xs': '0.1875rem',
        'radius-xs': '0.25rem',
        'radius-sm': '0.375rem',
        'radius-md': '0.5rem',
        'radius-lg': '0.75rem',
        'radius-xl': '1rem',
        'radius-2xl': '1.5rem',
        'radius-round': '9999px',
      },
      shadows: {
        'shadow-2xs': '0 1px 2px rgba(134, 144, 162, 0.1)',
        'shadow-xs': '0 2px 4px rgba(134, 144, 162, 0.15)',
        'shadow-sm': '0 3px 6px rgba(134, 144, 162, 0.2)',
        'shadow-md': '0 4px 8px rgba(134, 144, 162, 0.25)',
        'shadow-lg': '0 6px 12px rgba(134, 144, 162, 0.3)',
        'shadow-xl': '0 12px 24px rgba(134, 144, 162, 0.35)',
        'shadow-2xl': '0 24px 48px rgba(134, 144, 162, 0.4)',
      },
      zIndices: {},
      transitions: {},
    },
    utils: {
      // Abbreviated margin properties
      m: config => value => ({
        marginTop: value,
        marginBottom: value,
        marginLeft: value,
        marginRight: value,
      }),
      mt: config => value => ({
        marginTop: value,
      }),
      mr: config => value => ({
        marginRight: value,
      }),
      mb: config => value => ({
        marginBottom: value,
      }),
      ml: config => value => ({
        marginLeft: value,
      }),
      mx: config => value => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: config => value => ({
        marginTop: value,
        marginBottom: value,
      }),

      // A property for applying width/height together
      size: config => value => ({
        width: value,
        height: value,
      }),

      // A property to apply linear gradient
      linearGradient: config => value => ({
        backgroundImage: `linear-gradient(${value})`,
      }),

      // An abbreviated property for border-radius
      br: config => value => ({
        borderRadius: value,
      }),
    },
  })
