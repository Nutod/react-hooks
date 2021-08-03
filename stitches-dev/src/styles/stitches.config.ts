import { createCss } from "@stitches/react";

export const {
  styled,
  css,
  global,
  keyframes,
  getCssString,
  theme
} = createCss({
  theme: {
    colors: {
      gray500: "hsl(206,10%,76%)",
      blue500: "hsl(206,100%,50%)",
      purple500: "hsl(252,78%,60%)",
      green500: "hsl(148,60%,60%)",
      red500: "hsl(352,100%,62%)"
    },
    // spacing
    space: {
      1: "5px",
      2: "10px",
      3: "15px"
    },
    // width and height
    sizes: {
      100: "5px",
      200: "10px",
      300: "15px"
    },
    fontSizes: {
      "fs-2xs": "0.625rem",
      "fs-xs": "0.75rem",
      "fs-sm": "0.875rem",
      "fs-md": "1rem",
      "fs-lg": "1.125rem",
      "fs-xl": "1.25rem",
      "fs-2xl": "1.5rem",
      "fs-3xl": "1.75rem",
      "fs-4xl": "2rem",
      "fs-5xl": "2.25rem",
      "fs-6xl": "2.5rem",
      "fs-7xl": "3rem",
      "fs-8xl": "3.5rem",
      "fs-9xl": "4rem",
      "fs-10xl": "4.5rem"
    },
    fonts: {
      untitled: "Untitled Sans, apple-system, sans-serif",
      mono: "Söhne Mono, menlo, monospace"
    },
    fontWeights: {
      "fw-ultralight": 100,
      "fw-extralight": 200,
      "fw-light": 300,
      "fw-regular": 400,
      "fw-medium": 500,
      "fw-semibold": 600,
      "fw-bold": 700,
      "fw-extrabold": 800,
      "fw-ultrabold": 900
    },
    lineHeights: {
      "lh-leading-tightest": 1.125,
      "lh-leading-tighter": 1.25,
      "lh-leading-tight": 1.375,
      "lh-leading-normal": 1.5,
      "lh-leading-loose": 1.625,
      "lh-leading-looser": 1.75,
      "lh-leading-loosest": 1.875
    },
    letterSpacings: {
      "ls-tracking-tightest": "-0.08em",
      "ls-tracking-tighter": "-0.04em",
      "ls-tracking-tight": "-0.02em",
      "ls-tracking-normal": "0",
      "ls-tracking-loose": "0.02em",
      "ls-tracking-looser": "0.04em",
      "ls-tracking-loosest": "0.08em"
    },
    borderWidths: {},
    borderStyles: {},
    radii: {
      "radius-2xs": "0.1875rem",
      "radius-xs": "0.25rem",
      "radius-sm": "0.375rem",
      "radius-md": "0.5rem",
      "radius-lg": "0.75rem",
      "radius-xl": "1rem",
      "radius-2xl": "1.5rem"
    },
    shadows: {
      "shadow-2xs": "0 1px 2px rgba(134, 144, 162, 0.1)",
      "shadow-xs": "0 2px 4px rgba(134, 144, 162, 0.15)",
      "shadow-sm": "0 3px 6px rgba(134, 144, 162, 0.2)",
      "shadow-md": "0 4px 8px rgba(134, 144, 162, 0.25)",
      "shadow-lg": "0 6px 12px rgba(134, 144, 162, 0.3)",
      "shadow-xl": "0 12px 24px rgba(134, 144, 162, 0.35)",
      "shadow-2xl": "0 24px 48px rgba(134, 144, 162, 0.4)"
    },
    zIndices: {},
    transitions: {}
  }
});
