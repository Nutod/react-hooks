import React from 'react'
import constate from 'constate'

function useTheme({
  defaultTheme = 'light',
}: {
  defaultTheme: 'light' | 'dark'
}) {
  const [theme, setTheme] = React.useState(defaultTheme)

  const toggleTheme = React.useCallback(
    () => setTheme(prev => (prev === 'light' ? 'dark' : 'light')),
    []
  )

  return { theme, toggleTheme }
}

export const [ThemeContextProvider, useThemeContext] = constate(useTheme)
