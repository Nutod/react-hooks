import React, { ReactNode } from 'react'

const { Consumer, Provider } = React.createContext({})

interface IThemeContext {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = React.createContext({} as IThemeContext)

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')
  const toggleTheme = React.useCallback(() => {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'))
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

export const ThemeConsumer = Consumer
export const ThemeProvider = Provider