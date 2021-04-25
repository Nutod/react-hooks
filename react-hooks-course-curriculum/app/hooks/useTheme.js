import React from 'react'
import constate from 'constate'

function useTheme() {
  const [theme, setTheme] = React.useState('light')

  const toggle = React.useCallback(
    () =>
      setTheme(previousTheme => (previousTheme === 'light' ? 'dark' : 'light')),
    []
  )

  return { theme, toggle }
}

export const [ThemeContextProvider, useThemeContext] = constate(useTheme)
