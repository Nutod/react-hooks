import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { MantineProvider } from '@mantine/core'
import { theme } from './styles/theme'
import { BrowserRouter } from 'react-router-dom'

// Handle the routes

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
