import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeContextProvider } from './contexts/theme'
import App from './app'

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById('app')
)
