import { compose, withProps } from 'recompose';

import { Link } from 'react-router-dom';
import React from 'react';
import Share from 'features/Share';
import Wheel from 'features/Wheel';
import { decodeStateFromString } from 'common/helpers';

const Results = ({ setIndex = () => {}, blocks, index = 0 }) => (
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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <div style={{ width: '40%' }}>
        <h3>Actions</h3>
        <Link to={'/quiz'}>
          <button>Start again</button>
        </Link>
        <Link to={'/'}>
          <button>Visit main page</button>
        </Link>
        <h3>Sharing</h3>

        <Share blocks={blocks} />
        <h3>What is next?</h3>

        <p>Find what sphere are lacking your attention.</p>
        <p>Go fix</p>
        <p>There are coaches</p>
        <p>There is literature</p>
      </div>
    </div>
  </React.Fragment>
);

export default compose(
  withProps(props => ({
    blocks: decodeStateFromString(props.match.params.state).blocks
  }))
)(Results);
