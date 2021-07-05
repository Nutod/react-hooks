import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeContextProvider } from './contexts/themeContext'
import App from './app'

ReactDOM.render(
  <ThemeContextProvider defaultTheme="dark">
    <App />
  </ThemeContextProvider>,
  document.getElementById('app')
)
