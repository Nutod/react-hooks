import React from 'react'
import './index.css'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading'
import { useThemeContext } from './contexts/useTheme'

const Popular = React.lazy(() => import('./components/Popular'))
const Battle = React.lazy(() => import('./components/Battle'))
const Results = React.lazy(() => import('./components/Results'))

export default function App() {
  const { theme } = useThemeContext()

  return (
    <Router>
      <div className={theme}>
        <div className="container">
          <Nav />

          <React.Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" component={Popular} />
              <Route exact path="/battle" component={Battle} />
              <Route path="/battle/results" component={Results} />
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </React.Suspense>
        </div>
      </div>
    </Router>
  )
}
