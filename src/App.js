import './App.css';

import { Link, Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { decodeStateFromString, encodeStateToString } from './common/helpers';

import { BLOCKS } from './common/constants';
import Question from './features/Question';
import Wheel from './features/Wheel';
import Wizard from './features/Wizard';
import { compose } from 'lodash/fp';
import logo from './logo.svg';

const Container = ({ children }) => (
  <div
    style={{
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '50%'
    }}
    children={children}
  />
);

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <br />

          <Link to={'/'}>
            <h1>Wheel of Life</h1>
          </Link>
          <Switch>
            <Route
              path={'/'}
              exact={true}
              render={() => (
                <Redirect
                  to={`/${encodeStateToString({
                    blocks: BLOCKS,
                    index: 0
                  })}`}
                />
              )}
            />
            <Route path={'/*'} component={Wizard} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
