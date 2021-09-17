import React, { ReactNode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeContextProvider } from '../context/theme'

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContextProvider>
      <Router>{children}</Router>
    </ThemeContextProvider>
  )
}
