import { css } from 'styled-components'

export const CRITICAL = css`
  :root {
    /* brand foundation */
    --brand-hue: 170.8;
    --brand-saturation: 100%;
    --brand-lightness: 46.1%;

    /* light */
    --brand-light: hsl(
      var(--brand-hue) var(--brand-saturation) var(--brand-lightness)
    );
    --text1-light: hsl(var(--brand-hue) var(--brand-saturation) 10%);
    --text2-light: hsl(var(--brand-hue) 30% 30%);
    --surface1-light: hsl(var(--brand-hue) 25% 90%);
    --surface2-light: hsl(var(--brand-hue) 20% 99%);
    --surface3-light: hsl(var(--brand-hue) 20% 92%);
    --surface4-light: hsl(var(--brand-hue) 20% 85%);
    --surface-shadow-light: var(--brand-hue) 10% 20%;
    --shadow-strength-light: 0.02;

    /* dark */
    --brand-dark: hsl(
      var(--brand-hue) calc(var(--brand-saturation) / 2)
        calc(var(--brand-lightness) / 1.5)
    );
    --text1-dark: hsl(var(--brand-hue) 15% 85%);
    --text2-dark: hsl(var(--brand-hue) 5% 65%);
    --surface1-dark: hsl(var(--brand-hue) 10% 10%);
    --surface2-dark: hsl(var(--brand-hue) 10% 15%);
    --surface3-dark: hsl(var(--brand-hue) 5% 20%);
    --surface4-dark: hsl(var(--brand-hue) 5% 25%);
    --surface-shadow-dark: var(--brand-hue) 50% 3%;
    --shadow-strength-dark: 0.8;

    --gray-100: hsl(210, 20%, 98%);
    --gray-200: hsl(210, 20%, 88%);
    --gray-300: hsl(210, 20%, 78%);
    --gray-400: hsl(210, 20%, 68%);
    --gray-500: hsl(210, 20%, 58%);
    --gray-600: hsl(210, 20%, 48%);
    --gray-700: hsl(210, 20%, 38%);
    --gray-800: hsl(210, 20%, 28%);

    --font-display: 'Carrois Gothic', sans-serif;
    --font-body: 'Roboto', sans-serif;

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

  :root {
    color-scheme: light;

    /* set defaults */
    --brand: var(--brand-light);
    --text1: var(--text1-light);
    --text2: var(--text2-light);
    --surface1: var(--surface1-light);
    --surface2: var(--surface2-light);
    --surface3: var(--surface3-light);
    --surface4: var(--surface4-light);
    --surface-shadow: var(--surface-shadow-light);
    --shadow-strength: var(--shadow-strength-light);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      color-scheme: dark;

      --brand: var(--brand-dark);
      --text1: var(--text1-dark);
      --text2: var(--text2-dark);
      --surface1: var(--surface1-dark);
      --surface2: var(--surface2-dark);
      --surface3: var(--surface3-dark);
      --surface4: var(--surface4-dark);
      --surface-shadow: var(--surface-shadow-dark);
      --shadow-strength: var(--shadow-strength-dark);
    }
  }

  [color-scheme='light'] {
    color-scheme: light;

    --brand: var(--brand-light);
    --text1: var(--text1-light);
    --text2: var(--text2-light);
    --surface1: var(--surface1-light);
    --surface2: var(--surface2-light);
    --surface3: var(--surface3-light);
    --surface4: var(--surface4-light);
    --surface-shadow: var(--surface-shadow-light);
    --shadow-strength: var(--shadow-strength-light);
  }

  [color-scheme='dark'] {
    color-scheme: dark;

    --brand: var(--brand-dark);
    --text1: var(--text1-dark);
    --text2: var(--text2-dark);
    --surface1: var(--surface1-dark);
    --surface2: var(--surface2-dark);
    --surface3: var(--surface3-dark);
    --surface4: var(--surface4-dark);
    --surface-shadow: var(--surface-shadow-dark);
    --shadow-strength: var(--shadow-strength-dark);
  }
`
