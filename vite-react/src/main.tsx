import React from 'react'
import ReactDOM from 'react-dom'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { ThemeContextProvider, useThemeContext } from './context/theme'

function Main() {
  const { theme } = useThemeContext()

  return (
    <Router>
      <GeistProvider themeType={theme}>
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
