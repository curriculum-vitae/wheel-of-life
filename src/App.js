import 'App.css'

import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { Results } from 'features/Results'
import { Welcome } from 'features/Welcome'
import { Wizard } from 'features/Wizard'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path={'/'} exact={true} component={Welcome} />
            <Route path={'/quiz'} exact={true} component={Wizard} />
            <Route path={'/results/:state'} exact={true} component={Results} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
