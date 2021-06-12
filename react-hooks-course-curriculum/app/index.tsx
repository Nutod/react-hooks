import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { ThemeContextProvider } from './contexts/useTheme'

ReactDOM.render(
  <ThemeContextProvider defaultTheme="dark">
    <App />
  </ThemeContextProvider>,
  document.getElementById('app')
)
