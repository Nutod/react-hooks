import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Battle from './components/Battle'
import Nav from './components/Nav'
import Popular from './components/Popular'
import Results from './components/Results'

function App() {
  return (
    <>
      <Nav />

      <Switch>
        <Route path="/" exact>
          <Popular />
        </Route>
        <Route path="/battle/results">
          <Results />
        </Route>
        <Route path="/battle">
          <Battle />
        </Route>
      </Switch>
    </>
  )
}

export default App
