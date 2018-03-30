import { Link } from 'react-router-dom';
import React from 'react';
import Share from 'features/Share';
import Wheel from 'features/Wheel';
import { compose } from 'recompose';

const Results = ({ setIndex = () => {}, blocks = [], index = 0 }) => (
  <React.Fragment>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Wheel blocks={blocks} />
    </div>
    <br />
    <button onClick={() => setIndex(index - 1)} disabled={index === 0}>
      Edit
    </button>
    <br />
    <Share blocks={blocks} />
    <Link to={'/'}>
      <button>Main page</button>
    </Link>
    <h1>What is next?</h1>
    <p>Find what sphere are lacking your attention.</p>
    <p>Go fix</p>
    <p>There are coaches</p>
    <p>There is literature</p>
  </React.Fragment>
);

export default Results;
