import 'App.css';

import { Link, Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { decodeStateFromString, encodeStateToString } from 'common/helpers';

import { BLOCKS } from 'common/constants';
import Question from 'features/Question';
import Welcome from 'features/Welcome';
import Wheel from 'features/Wheel';
import Wizard from 'features/Wizard';
import { compose } from 'lodash/fp';
import logo from 'logo.svg';

const Container = ({ children }) => <div style={{}} children={children} />;

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route path={'/'} exact={true} component={Welcome} />
            <Route path={'/quiz'} exact={true} component={Wizard} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
