import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '@geist-ui/style'
import Nav from './components/Nav'
import Popular from './components/Popular'
import Battle from './components/Battle'
import Result from './components/Result'

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="battle" element={<Battle />} />
        <Route path="battle/result" element={<Result />} />
        {/* Not Found Here? */}
      </Routes>
    </>
  )
}

export default App
