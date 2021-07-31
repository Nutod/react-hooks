import React from 'react'
import constate from 'constate'

const { Consumer, Provider } = React.createContext({})

export const ThemeConsumer = Consumer
export const ThemeProvider = Provider

function useTheme({
  defaultTheme = 'light',
}: {
  defaultTheme: 'light' | 'dark'
}) {
  const [theme, setTheme] = React.useState(defaultTheme)

  const toggleTheme = React.useCallback(() => {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'))
  }, [])

  return { theme, toggleTheme }
}

export const [ThemeContextProvider, useThemeContext] = constate(useTheme)
