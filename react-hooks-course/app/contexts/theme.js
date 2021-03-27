import React from 'react'

const { Consumer, Provider } = React.createContext()

export const ThemeContext = React.createContext()

export function ThemeContextProvider({ children }) {
  const value = {}
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = React.useContext(ThemeContext)

  if (!context) {
    throw new Error('Something went wrong')
  }

  return context
}

export const ThemeConsumer = Consumer
export const ThemeProvider = Provider
