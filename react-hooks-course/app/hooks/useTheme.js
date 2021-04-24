import React from 'react'
import constate from 'constate'

function useTheme() {
  // state and state updater
  const [theme, setTheme] = React.useState('light')

  const toggleTheme = React.useCallback(() => {
    setTheme(previousTheme => (previousTheme === 'light' ? 'dark' : 'light'))
  }, [])

  return { theme, toggleTheme }
}

export const [ThemeProvider, useThemeContext] = constate(useTheme)
