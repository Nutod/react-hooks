import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '@geist-ui/style'
import Nav from './components/Nav'
import Popular from './components/Popular'

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Popular />} />
      </Routes>
    </>
  )
}

export default App
