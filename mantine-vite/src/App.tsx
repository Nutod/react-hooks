import React from 'react'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Realtors from './components/Realtors'
import Features from './components/Features'

// Config and then defaults
// Use a custom Context Provider?

function App() {
  return (
    <>
      <Sidebar />
      <Hero />
      <Realtors />
      <Features />
    </>
  )
}

export default App
