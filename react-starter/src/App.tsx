import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Battles from './components/Battles'
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
        <Route path="/battle/result">
          <Results />
        </Route>
        <Route path="battle">
          <Battles />
        </Route>
      </Switch>
    </>
  )
}

export default App
