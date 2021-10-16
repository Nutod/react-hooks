import React from 'react'

interface UseDarkModeOutput {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

function useDarkMode(defaultValue?: boolean): UseDarkModeOutput {
  const [theme, setTheme] = React.useState<'dark' | 'light'>('light')

  const toggleTheme = React.useCallback(() => {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'))
  }, [])

  return {
    theme,
    toggleTheme,
  }
}

export default useDarkMode
