import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Battle from './components/Battle'
import Nav from './components/Nav'
import Popular from './components/Popular'
import Results from './components/Results'

// Compose components on the function level
// Move up from there

function App() {
  return (
    <>
      <Nav />
      {/* Nav component */}

      <Switch>
        <Route path="/" exact>
          <Popular />
        </Route>
        <Route path="/battle" exact>
          <Battle />
        </Route>
        <Route path="/battle/result">
          <Results />
        </Route>
      </Switch>
    </>
  )
}

export default App
