import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { ThemeContextProvider } from './hooks/useTheme'

const app = (
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
)

ReactDOM.render(app, document.getElementById('app'))
