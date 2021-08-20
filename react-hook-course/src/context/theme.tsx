import React, { ReactNode } from 'react'

const ThemeContext = React.createContext(
  {} as {
    theme: 'light' | 'dark'
    toggleTheme: () => void
  }
)

ThemeContext.displayName = 'ThemeContext'

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')

  const toggleTheme = React.useCallback(() => {
    setTheme(theme => {
      return theme
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = React.useContext(ThemeContext)

  if (!context) throw new Error('ThemeContext does not exist')

  return context
}
