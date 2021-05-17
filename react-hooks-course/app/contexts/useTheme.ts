import React from 'react'
import constate from 'constate'

function useTheme() {
  const [theme, setTheme] = React.useState('light')

  const toggleTheme = React.useCallback(() => {
    setTheme(previousTheme => (previousTheme === 'light' ? 'dark' : 'light'))
  }, [])

  return { theme, toggleTheme }
}

export const [ThemeContextProvider, useThemeContext] = constate(useTheme)
