import React from 'react'

interface UseDarkModeOutput {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

// Classic case of React as a State Management Library
function useDarkMode(): UseDarkModeOutput {
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
