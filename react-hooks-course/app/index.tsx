import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { ThemeContextProvider, useThemeContext } from './hooks/useTheme'

import './index.css'

function Index() {
  return (
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'))
