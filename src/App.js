import './App.css';

import { Link, Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
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
          <Link to={'/'}>Wheel of Life</Link>
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
          <Route path={'*'} component={Wizard} />
        </Container>
      </Router>
    );
  }
}

export default App;
