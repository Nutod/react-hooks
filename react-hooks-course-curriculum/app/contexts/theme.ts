import React from 'react'

type ThemeContext = {
  theme: string
  toggleTheme: () => void
}

const { Consumer, Provider } = React.createContext({} as ThemeContext)

export const ThemeConsumer = Consumer
export const ThemeProvider = Provider
