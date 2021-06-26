import { global } from './stitches.config'

export const globalStyles = global({
  '*,*::before, *::after': {
    boxSizing: 'border-box',
  },
  'body,h1,h2,h3,h4,p,figure,blockquote,dl,dd': {
    margin: 0,
  },
  'html:focus-within': {
    scrollBehavior: 'smooth',
  },
  body: {
    minHeight: '100vh',
    textRendering: 'optimizeSpeed',
    lineHeight: 1.5,
    background: 'white',
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: '400',
  },
  'a:not([class])': {
    textDecorationSkipInk: 'auto',
  },

  /* Make images easier to work with */
  'img,picture': {
    maxWidth: '100%',
    display: 'block',
  },

  'input, button, textarea, select': {
    font: 'inherit',
  },

  html: {
    fontSize: '100%',
  },
  p: {
    marginBottom: '1rem',
  },
  'h1,h2,h3,h4,h5': {
    margin: '3rem 0 1.38rem',
    fontFamily: 'Josefin Sans, sans-serif',
    fontWeight: '400',
    lineHeight: '1.3',
  },
  h1: {
    marginTop: '0',
    fontSize: '2.488rem',
  },
  h2: {
    fontSize: '2.074rem',
  },
  h3: {
    fontSize: '1.728rem',
  },
  h4: {
    fontSize: '1.44rem',
  },
  h5: {
    fontSize: '1.2rem',
  },
  small: {
    fontSize: '0.833rem',
  },
})
