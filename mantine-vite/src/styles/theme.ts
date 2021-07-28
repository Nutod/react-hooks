import { Tuple } from '@mantine/core'
import React, { CSSProperties } from 'react'

// sizing
// spacing
// defaults

// theme will be merged with the defaults

export type Theme = {
  colorScheme: 'light' | 'dark'
  white: string
  black: string
  colors: Record<string, Tuple<string, 10>>
  fontFamily: CSSProperties['fontFamily']
  lineHeight: CSSProperties['lineHeight']
  transitionTimingFunction: CSSProperties['transitionTimingFunction']
  fontFamilyMonospace: CSSProperties['fontFamily']
  primaryColor: string

  fontSizes: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>
  radius: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>
  spacing: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>
  shadows: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string>

  headings: {
    fontFamily: CSSProperties['fontFamily']
    fontWeight: CSSProperties['fontWeight']
    sizes: {
      h1: {
        fontSize: CSSProperties['fontSize']
        lineHeight: CSSProperties['lineHeight']
      }
      h2: {
        fontSize: CSSProperties['fontSize']
        lineHeight: CSSProperties['lineHeight']
      }
      h3: {
        fontSize: CSSProperties['fontSize']
        lineHeight: CSSProperties['lineHeight']
      }
      h4: {
        fontSize: CSSProperties['fontSize']
        lineHeight: CSSProperties['lineHeight']
      }
      h5: {
        fontSize: CSSProperties['fontSize']
        lineHeight: CSSProperties['lineHeight']
      }
      h6: {
        fontSize: CSSProperties['fontSize']
        lineHeight: CSSProperties['lineHeight']
      }
    }
  }
}

export const theme = {
  colorScheme: 'light',

  customProperty: 'value-here',
  primaryColor: '#c59963',
  secondaryColor: '#101e2d',

  fontFamily: 'Nunito, sans-serif',

  shadows: {
    // other shadows (xs, sm, lg) will be merged from default theme
    md: '1px 1px 3px rgba(0,0,0,.25)',
    xl: '5px 5px 3px rgba(0,0,0,.25)',
  },

  headings: {
    fontFamily: 'Josefin Sans, sans-serif',
    sizes: {
      h1: { fontSize: 30 },
    },
  },
}
