import React from 'react'
import constate from 'constate'

const { Consumer, Provider } = React.createContext({})

export const ThemeConsumer = Consumer
export const ThemeProvider = Provider

function useTheme({ defaultTheme }: { defaultTheme: 'light' | 'dark' }) {
  const [theme, setTheme] = React.useState(defaultTheme)

  // too many manual things
  // return onmounted
  const toggleTheme = React.useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [])

  return { theme, toggleTheme }
}

export const [ThemeContextProvider, useThemeContext] = constate(useTheme)
