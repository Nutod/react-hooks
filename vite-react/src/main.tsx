import React from 'react'
import ReactDOM from 'react-dom'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GeistProvider>
        <CssBaseline />
        <App />
      </GeistProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
