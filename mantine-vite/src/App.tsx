import React from 'react'
import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Realtors from './components/Realtors'
import Features from './components/Features'

const Container = styled.div``

function App() {
  return (
    <Container>
      <Sidebar />
      <Hero />
      <Realtors />
      <Features />
    </Container>
  )
}

export default App
