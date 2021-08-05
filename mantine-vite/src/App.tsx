import React from 'react'
import { MantineProvider, Button } from '@mantine/core'
import './App.css'
import Home from './pages/Home'
import { theme } from './styles/theme'

function App() {
  return (
    <MantineProvider theme={theme}>
      <Home />
    </MantineProvider>
  )
}

export default App
