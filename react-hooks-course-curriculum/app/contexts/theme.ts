import React from 'react'
import constate from 'constate'

const { Consumer, Provider } = React.createContext({})

export const ThemeConsumer = Consumer
export const ThemeProvider = Provider

function useMountedCallback<T>(toggleCb: () => () => void, options: T[]) {
  return React.useCallback(toggleCb(), options)
}

function useTheme({ defaultTheme }: { defaultTheme: 'light' | 'dark' }) {
  const [theme, setTheme] = React.useState(defaultTheme)

  function toggleCb() {
    return () => {
      setTheme(theme => (theme === 'dark' ? 'light' : 'dark'))
    }
  }

  const toggleTheme = useMountedCallback(toggleCb, [])

  return { theme, toggleTheme }
}

export const [ThemeContextProvider, useThemeContext] = constate(useTheme)
