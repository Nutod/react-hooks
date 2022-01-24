import React from 'react'
import { Title, Text } from '@mantine/core'
import { Route, Routes } from 'react-router'
import Popular from './components/Popular'
import Battle from './components/Battle'
import Results from './components/Results'
import Nav from './components/Nav'

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="battle" element={<Battle />} />
        <Route path="battle/results" element={<Results />} />
      </Routes>
    </>
  )
}

export default App
