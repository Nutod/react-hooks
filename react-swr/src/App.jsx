import React from 'react'
import Container from './components/Container'
import Users from './components/Users'

function App() {
  return (
    <Container>
      <h1>Jardin Collection</h1>
      <Users />
      <button className="zi-btn small">Load More</button>
    </Container>
  )
}

export default App
