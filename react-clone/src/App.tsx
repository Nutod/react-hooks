import React from 'react'
import { Switch } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'

// Compose components on the function level
// Move up from there

function App() {
  return (
    <>
      <Nav />
      {/* Nav component */}
      <Switch>
        
      </Switch>
      {/* Routing component below the Nav */}
    </>
  )
}

export default App
