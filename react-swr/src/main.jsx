import React from 'react'
import ReactDOM from 'react-dom'
import AppProviders from './providers/app-providers'

import '@geist-ui/style'

ReactDOM.render(
  <React.StrictMode>
    <AppProviders />
  </React.StrictMode>,
  document.getElementById('root')
)
