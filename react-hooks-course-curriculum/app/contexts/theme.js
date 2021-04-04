import React from 'react'

export const ThemeContext = React.createContext()
ThemeContext.displayName = 'ThemeContext'

export function ThemeContextProvider({ children }) {
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

const { Consumer, Provider } = React.createContext()

export const ThemeConsumer = Consumer
export const ThemeProvider = Provider
