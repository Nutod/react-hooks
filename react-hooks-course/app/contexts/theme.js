import React from 'react'

const { Consumer, Provider } = React.createContext()

const ThemeContext = React.createContext()

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = React.useState('light')

  const toggleTheme = () =>
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'))

  const value = { theme, toggleTheme }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const ThemeConsumer = Consumer
export const ThemeProvider = Provider
