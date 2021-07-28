import { css } from 'styled-components'

export const CRITICAL = css`
  :root {
    --color-primary: hsl(33, 46%, 58%);
    --color-primary-glare: hsl(32, 39%, 51%);

    --color-secondary: hsl(211, 48%, 12%);
    --color-primary-shade: hsl(212, 47%, 2%);

    --font-display: 'Josefin Sans', sans-serif;
    --font-body: 'Nunito', sans-serif;

    --space: 1rem;
    --space-100: calc(0.75 * var(--space));
    --space-200: calc(1 * var(--space));
    --space-300: calc(1.33 * var(--space));
    --space-400: calc(1.77 * var(--space));
    --space-500: calc(2.36 * var(--space));
    --space-600: calc(3.15 * var(--space));
    --space-700: calc(4.2 * var(--space));
    --space-800: calc(5.6 * var(--space));

    --elevation-one: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --elevation-two: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --elevation-three: 0 10px 15px -3px rgba(0, 0, 0, 0.2),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --elevation-four: 0 20px 25px -5px rgba(0, 0, 0, 0.2),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`
