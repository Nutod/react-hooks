import React from 'react'

export function useTheme({ defaultTheme }: { defaultTheme: 'light' | 'dark' }) {
  const [theme, setTheme] = React.useState(defaultTheme)

  const toggleTheme = React.useCallback(() => {
    setTheme(theme => (theme === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}
