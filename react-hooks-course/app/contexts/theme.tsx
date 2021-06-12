import React, { ReactNode } from 'react'

type ThemeContextType = {
  theme: string
  toggleTheme: () => void
}

const ThemeContext = React.createContext({} as ThemeContextType)

ThemeContext.displayName = 'ThemeContext'

export function ThemeContextProvider({
  children,
  defaultTheme = 'light',
}: {
  children: ReactNode
  defaultTheme: 'light' | 'dark'
}) {
  const [theme, setTheme] = React.useState(defaultTheme)

  const toggleTheme = React.useCallback(() => {
    setTheme(previous => (previous === 'light' ? 'dark' : 'light'))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)

  if (!context) throw new Error('ThemeContext is undefined')

  return context
}
