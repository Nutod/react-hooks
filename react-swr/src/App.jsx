import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Container from './components/Container'
import Navigation from './components/Navigation'
import Users from './components/Users'
import Profile from './components/Profile'

function App() {
  return (
    <Container>
      <Navigation />
      <h1 style={{ textAlign: 'center' }}>Jardin Collection</h1>

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Container>
  )
}

export default App
