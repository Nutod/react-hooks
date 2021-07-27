import React from 'react'
import { MantineProvider, NormalizeCSS, GlobalStyles } from '@mantine/core'
import ReactDOM from 'react-dom'
import App from './App'
import { theme } from './styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      {/* <NormalizeCSS /> */}
      <GlobalStyles />
      <App />
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
