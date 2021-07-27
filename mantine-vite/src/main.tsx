import React from 'react'
import ReactDOM from 'react-dom'
import { MantineProvider, GlobalStyles } from '@mantine/core'
import App from './App'
import { theme } from './styles/theme'
import { GlobalStyledElements } from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <GlobalStyledElements />
      <GlobalStyles />
      <App />
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
