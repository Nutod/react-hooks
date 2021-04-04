import React, { ReactNode } from 'react'

export const ThemeContext = React.createContext<{
  theme: string
  toggleTheme: () => void
}>({
  theme: 'light',
  toggleTheme() {},
})
ThemeContext.displayName = 'ThemeContext'

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = React.useState('light')

  const toggleTheme = () => {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'))
  }

  const value = {
    theme,
    toggleTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = React.useContext(ThemeContext)

  if (!context) throw new Error('Context is not defined')

  return context
}
