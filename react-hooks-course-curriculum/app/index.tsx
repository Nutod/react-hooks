import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ThemeContextProvider } from './contexts/theme'
import App from './app'

ReactDOM.render(
  <ThemeContextProvider defaultTheme="light">
    <App />
  </ThemeContextProvider>,
  document.getElementById('app')
)
