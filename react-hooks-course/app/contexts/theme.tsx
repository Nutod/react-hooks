import React, { ReactNode } from 'react'

const { Consumer, Provider } = React.createContext()

export const ThemeConsumer = Consumer
export const ThemeProvider = Provider

const ThemeContext = React.createContext({})

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')

  const toggleTheme = React.useCallback(() => {
    setTheme(theme => (theme === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = React.useContext(ThemeContext)

  if (!context) throw new Error('Context is not defined')

  return context
}
