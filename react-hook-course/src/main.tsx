import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ThemeContextProvider } from './context/theme'
import './styles/main.scss'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
