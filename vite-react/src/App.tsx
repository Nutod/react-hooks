import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Popular from './components/Popular'
import Battle from './components/Battle'
import Nav from './components/Nav'

function App() {
  return (
    <>
      <Nav />

      <main>
        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="battle" element={<Battle />} />
        </Routes>
      </main>
    </>
  )
}

export default App
