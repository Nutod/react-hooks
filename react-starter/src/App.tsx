import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'

const Popular = React.lazy(() => import('./components/Popular'))
const Battles = React.lazy(() => import('./components/Battles'))
const Results = React.lazy(() => import('./components/Results'))

function App() {
  return (
    <>
      <Nav />

      <React.Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/" exact>
            <Popular />
          </Route>
          <Route path="/battles/result" exact>
            <Results />
          </Route>
          <Route path="/battles" exact>
            <Battles />
          </Route>
        </Switch>
      </React.Suspense>
    </>
  )
}

export default App
