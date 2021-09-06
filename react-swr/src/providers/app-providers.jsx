import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../App'

export default function AppProviders() {
  return (
    <Router>
      <App />
    </Router>
  )
}
