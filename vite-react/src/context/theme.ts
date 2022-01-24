import React from 'react'
import constate from 'constate'
import { useMountedCallback } from '../hooks/useMountedCallback'

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
