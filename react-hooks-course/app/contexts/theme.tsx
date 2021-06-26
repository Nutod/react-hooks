import React, { ReactNode } from 'react'

type IThemeContext = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = React.createContext({} as IThemeContext)

function useTheme({
  defaultTheme = 'light',
}: {
  defaultTheme: 'light' | 'dark'
}) {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')

  const toggleTheme = React.useCallback(() => {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'))
  }, [])

  return { theme, toggleTheme }
}

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const contextValue = useTheme({ defaultTheme: 'light' })

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = React.useContext(ThemeContext)

  if (!context) throw new Error('Context not defined')

  return context
}
