import 'App.css'

import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { CssBaseline } from '@material-ui/core'
import { OpenGraph } from 'features/OpenGraph'
import { Results } from 'features/Results'
import { Welcome } from 'features/Welcome'
import { Wizard } from 'features/Wizard'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path={'/'} exact={true} component={Welcome} />
            <Route path={'/quiz'} exact={true} component={Wizard} />
            <Route path={'/og'} exact={true} component={OpenGraph} />
            <Route path={'/results/:state'} exact={true} component={Results} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
