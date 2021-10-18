import React from 'react'

export default function useDarkMode() {
  const [theme, setTheme] = React.useState<'dark' | 'light'>('dark')

  const toggleTheme = React.useCallback(() => {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'))
  }, [])

  return { theme, toggleTheme }
}
