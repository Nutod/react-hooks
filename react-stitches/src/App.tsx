import React from 'react'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Homes from './components/Homes'
import Realtors from './components/Realtors'
import Sidebar from './components/Sidebar'
import Stories from './components/Stories'
import Footer from './components/Footer'
import { globalStyles } from './global.styles'

function App() {
  globalStyles()

  return (
    <>
      <h1>Heading One</h1>
      <h2>Heading Two</h2>
      <Sidebar />
      <Hero />
      <Realtors />
      <Features />
      <Stories />
      <Homes />
      <Gallery />
      <Footer />
    </>
  )
}

export default App
