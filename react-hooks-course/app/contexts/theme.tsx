import React from 'react'
import generateContext from 'react-generate-context'

const { Consumer, Provider } = React.createContext({})

export const ThemeConsumer = Consumer
export const ThemeProvider = Provider

type ThemeContextType = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = React.createContext({} as ThemeContextType)

type ThemeContextProviderProps = {
  children: React.ReactNode
}

function useThemeContextValue() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')

  // if we had multiple handlers?
  const toggleTheme = React.useCallback(() => {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'))
  }, [])

  return { theme, toggleTheme }
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const { theme, toggleTheme } = useThemeContextValue()

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = React.useContext(ThemeContext)

  if (!context) throw new Error('ThemeContext is not defined')

  return context
}

export const [GeneratedThemeContextProvider, generatedUseThemeContext] =
  generateContext(useThemeContextValue)
