import './App.css';

import React, { Component } from 'react';

import Wheel from './features/Wheel';
import logo from './logo.svg';

const BLOCKS = [
  {
    name: 'Health',
    value: 3
  },
  {
    name: 'Family',
    value: 1
  },
  {
    name: 'Carreer',
    value: 7
  },
  {
    name: 'Personal development',
    value: 10
  }
];

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

const Question = ({ block }) => (
  <div>
    <h3>How do you feel about {block.name}?</h3>
    <div>1 - 10</div>

    <input style={{ width: '100%' }} type={'range'} value={3} min={0} max={10} />
  </div>
);

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Wheel Of Life v0.0.1</h1>

        <h2>Current question</h2>
        <Question block={BLOCKS[0]} />
        <button>prev</button>
        <button>skip</button>
        <button>next</button>
        <br />
        <h2>Result</h2>
        <Wheel blocks={BLOCKS} />
        <br />
        <button>Share</button>
      </Container>
    );
  }
}

export default App;
