import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Popular from './components/Popular'
import Battle from './components/Battle'
import Result from './components/Result'
import Nav from './components/Nav'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="battle" element={<Battle />} />
          <Route path="battle/results" element={<Result />} />
        </Routes>
      </main>
    </>
  )
}

export default App
