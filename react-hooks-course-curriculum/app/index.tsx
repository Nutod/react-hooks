import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeContextProvider } from './contexts/theme'
import App from './app'

ReactDOM.render(
  <ThemeContextProvider defaultTheme="dark">
    <App />
  </ThemeContextProvider>,
  document.getElementById('app')
)
