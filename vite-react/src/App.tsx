import React from 'react'
import { Text } from '@geist-ui/react'
import { Route, Routes } from 'react-router-dom'
import Popular from './components/Popular'
import Battle from './components/Battle'
import Result from './components/Result'

function App() {
  return (
    <div>
      <Text h1>Navigation</Text>
      <h2>Popular component</h2>
      <main>
        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="battle" element={<Battle />} />
          <Route path="battle/results" element={<Result />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
