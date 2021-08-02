import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { ThemeContextProvider } from './context/theme'
import { GlobalStyles } from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
