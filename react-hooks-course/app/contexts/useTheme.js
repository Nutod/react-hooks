import constate from 'constate/dist/ts/src'
import React from 'react'

function useTheme() {
  const [theme, setTheme] = React.useState('light')

  const toggleTheme = React.useCallback(
    () =>
      setTheme(previousTheme => (previousTheme === 'light' ? 'dark' : 'light')),
    []
  )

  return { theme, toggleTheme }
}

export const [ThemeContextProvider, useThemeContext] = constate(useTheme)
