import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
