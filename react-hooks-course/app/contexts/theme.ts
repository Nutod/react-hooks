import React from 'react'

interface IThemeContext {
  theme: string
  toggleTheme: () => void
}

const { Consumer, Provider } = React.createContext<IThemeContext>(
  {} as IThemeContext
)

export const ThemeConsumer = Consumer
export const ThemeProvider = Provider
