import { global } from './stitches.config'

export const globalStyles = global({
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
  '::selection': {
    backgroundColor: '$colorPrimary',
  },
  html: {
    boxSizing: 'border-box',
  },
})
