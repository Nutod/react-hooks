import React from 'react'
import constate from 'constate'

function useTheme({
  defaultTheme = 'dark',
}: {
  defaultTheme: 'light' | 'dark'
}) {
  const [theme, setTheme] = React.useState(defaultTheme)

  const toggleTheme = React.useCallback(() => {
    setTheme(previous => (previous === 'light' ? 'dark' : 'light'))
  }, [])

  return { theme, toggleTheme }
}

export const [ThemeContextProvider, useThemeContext] = constate(useTheme)
