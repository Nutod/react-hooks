import React from 'react'
import AppProvider from './providers/app-provider'
import { AppRoutes } from './routes'

import '@geist-ui/style'
import 'pollen-css'

export default function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}
