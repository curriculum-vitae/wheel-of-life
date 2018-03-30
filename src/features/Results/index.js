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
    <Link to={'/quiz'}>
      <button>Start again</button>
    </Link>
    <br />
    <Link to={'/'}>
      <button>Main page</button>
    </Link>
    <br />
    <Share blocks={blocks} />

    <h1>What is next?</h1>
    <p>Find what sphere are lacking your attention.</p>
    <p>Go fix</p>
    <p>There are coaches</p>
    <p>There is literature</p>
  </React.Fragment>
);

export default compose(
  withProps(props => ({
    blocks: decodeStateFromString(props.match.params.state).blocks
  }))
)(Results);
