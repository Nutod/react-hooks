import React from 'react'
import ReactDOM from 'react-dom'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeContextProvider, useThemeContext } from './context/theme'

function Main() {
  const { theme } = useThemeContext()

  return (
    <Router>
      <GeistProvider themeType="light">
        <CssBaseline />
        <App />
      </GeistProvider>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider defaultTheme="dark">
      <Main />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
