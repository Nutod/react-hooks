import { createGlobalStyle } from 'styled-components'
import { RESET } from './reset'
import { ELEMENTS } from './elements'
import { CRITICAL } from './critical'
import { TYPOGRAPHY } from './typography'

export const GlobalStyles = createGlobalStyle`
  ${RESET}
  ${CRITICAL}
  ${ELEMENTS}
  ${TYPOGRAPHY}

  *,
  *:before,
  *:after {
   box-sizing: inherit;
  }

  *::selection {
   background: var(--brand);
   color: var(--color-white);
  }

  html {
   box-sizing: border-box;
   block-size: 100%;
  }

  body {
   font-family: var(--font-body);
   font-weight: 300;
   line-height: 1.65;
   overflow-x: hidden;
   font-size: 1.1rem;

   background: var(--surface1);
   color: var(--text1);
  }
`
