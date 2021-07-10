import React from 'react'
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading'
import Nav from './components/Nav'

const Posts = React.lazy(() => import('./components/Posts'))
const Post = React.lazy(() => import('./components/Post'))
const User = React.lazy(() => import('./components/User'))

export class App extends React.Component {
    return (
      <Router>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />

              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route exact path="/" render={() => <Posts type="top" />} />
                  <Route path="/new" render={() => <Posts type="new" />} />
                  <Route path="/post" component={Post} />
                  <Route path="/user" component={User} />
                  <Route render={() => <h1>404</h1>} />
                </Switch>
              </React.Suspense>
            </div>
          </div>
      </Router>
    )
  
}
