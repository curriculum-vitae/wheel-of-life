import 'App.css'

import {
  Link,
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import React, { Component } from 'react'
import { decodeStateFromString, encodeStateToString } from 'utils/helpers'

import { BLOCKS } from 'utils/constants'
import { Results } from 'features/Results'
import { Welcome } from 'features/Welcome'
import Wheel from 'features/Wheel'
import Wizard from 'features/Wizard'
import { compose } from 'lodash/fp'
import logo from 'logo.svg'

const Container = ({ children }) => <div style={{}} children={children} />

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={'/'} exact={true} component={Welcome} />
          <Route path={'/quiz'} exact={true} component={Wizard} />
          <Route path={'/results/:state'} exact={true} component={Results} />
        </Switch>
      </Router>
    )
  }
}

export default App
