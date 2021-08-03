import React from 'react'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Realtors from '../components/Realtors'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <>
      <Sidebar />
      <Hero />
      <Realtors />
      <Features />
      <Footer />
    </>
  )
}
