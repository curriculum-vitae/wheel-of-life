import './App.css';

import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from 'react';
import { withProps, withState } from 'recompose';

import { BLOCKS } from './common/constants';
import Question from './features/Question';
import Wheel from './features/Wheel';
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
        <Route
          path={'*'}
          render={({ match }) => (
            <Container>
              <h1>Wheel Of Life v0.0.1</h1>
              {match.url}
              <Question
                block={this.props.blocks[this.props.index]}
                onChange={value => {
                  this.props.setBlocks([
                    ...this.props.blocks.slice(0, this.props.index),
                    {
                      ...this.props.blocks[this.props.index],
                      value: value
                    },
                    ...this.props.blocks.slice(this.props.index + 1, this.props.blocks.length)
                  ]);
                }}
              />
              <br />
              <button
                onClick={() => this.props.setIndex(this.props.index - 1)}
                disabled={this.props.index === 0}
              >
                prev
              </button>
              <button
                onClick={() => this.props.setIndex(this.props.index + 1)}
                disabled={this.props.index === this.props.blocks.length - 1}
              >
                skip
              </button>
              <button
                onClick={() => this.props.setIndex(this.props.index + 1)}
                disabled={this.props.index === this.props.blocks.length - 1}
              >
                next
              </button>
              <br />
              <h2>Result</h2>
              <Wheel blocks={this.props.blocks} />
              <br />
              <button>Share</button>
            </Container>
          )}
        />
      </Router>
    );
  }
}

export default compose(withState('blocks', 'setBlocks', BLOCKS), withState('index', 'setIndex', 0))(
  App
);
