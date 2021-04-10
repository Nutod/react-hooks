import React from 'react'
import constate from 'constate'

function useTheme() {
  const [theme, setTheme] = React.useState('light')

  const toggleTheme = React.useCallback(
    () => setTheme(theme => (theme === 'light' ? 'dark' : 'light')),
    []
  )

  return { theme, toggleTheme }
}
