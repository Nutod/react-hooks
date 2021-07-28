import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import { GlobalStyles } from './styles/global'
import { ThemeContextProvider } from './context/theme'

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
