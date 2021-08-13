import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Popular from './components/Popular'

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Popular />} />
    </Routes>
  )
}

export default App
