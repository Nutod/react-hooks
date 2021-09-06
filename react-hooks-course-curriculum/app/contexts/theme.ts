import React from 'react'
import constate from 'constate'
import { useTheme } from '../hooks/useTheme'

const { Consumer, Provider } = React.createContext({})

export const ThemeConsumer = Consumer
export const ThemeProvider = Provider

export const [ThemeContextProvider, useThemeContext] = constate(useTheme)
