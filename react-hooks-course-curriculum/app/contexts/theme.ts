import React from 'react'
import constate from 'constate'
import useDarkMode from '../hooks/use-dark-mode'

const { Consumer, Provider } = React.createContext({})

export const ThemeConsumer = Consumer
export const ThemeProvider = Provider

export const [ThemeContextProvider, useThemeContext] = constate(useDarkMode)
