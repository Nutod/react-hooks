import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import { ThemeContextProvider } from './contexts/theme'
import './index.css'

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById('app')
)
