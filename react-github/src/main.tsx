import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { MantineProvider } from '@mantine/core'
import { theme } from './styles/theme'

// Handle the routes

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
