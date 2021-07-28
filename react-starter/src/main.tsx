import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GlobalStyles } from './styles/global'
import { ThemeContextProvider } from './context/theme'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <GlobalStyles />
      <Router>
        <App />
      </Router>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
