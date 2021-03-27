import React from 'react'

const { Consumer, Provider } = React.createContext()

export const ThemeContext = React.createContext()

// Drop the name here as well because..why not!?
ThemeContext.displayName = 'ThemeContext'

// We could drop in a context provider here if we want

export function useTheme() {
  const context = React.useContext(ThemeContext)

  if (!context) {
    throw new Error('Context is not defined')
  }

  return context
}

export const ThemeConsumer = Consumer
export const ThemeProvider = Provider
