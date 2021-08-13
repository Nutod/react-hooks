import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Battle from './components/Battle'
import Nav from './components/Nav'
import Popular from './components/Popular'
import Result from './components/Result'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="battle" element={<Battle />} />
        <Route path="battle/result" element={<Result />} />
      </Routes>
    </>
  )
}

export default App
