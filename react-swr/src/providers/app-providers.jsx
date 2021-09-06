import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { SWRConfig } from 'swr'
import App from '../App'

export default function AppProviders() {
  return (
    <SWRConfig
      value={{
        refreshInterval: 10000,
        fetcher: (resource, init) =>
          fetch(resource, init).then(res => res.json()),
      }}
    >
      <Router>
        <App />
      </Router>
    </SWRConfig>
  )
}
