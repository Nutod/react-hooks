import React from 'react'

const { Consumer, Provider } = React.createContext()

const ThemeContext = React.createContext()

// function ThemeContextProvider({children}) {
//    return <T
// }

export const ThemeConsumer = Consumer
export const ThemeProvider = Provider