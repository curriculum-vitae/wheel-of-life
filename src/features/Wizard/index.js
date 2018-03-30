import { Link, Redirect } from 'react-router-dom';
import { compose, withProps, withState } from 'recompose';
import { decodeStateFromString, encodeStateToString } from 'common/helpers';
import { flow, reduce, sortBy } from 'lodash/fp';

import AppBar from 'features/AppBar';
import Question from 'features/Question';
import React from 'react';
import Share from 'features/Share';
import Wheel from 'features/Wheel';

const convertMatchToData = match => {
  const str = match.params.state;
  return decodeStateFromString(str);
};

const convertBlocksToHash = flow(
  sortBy('name'),
  reduce((hash, block) => hash + block.name + block.value, '')
);

const isInSync = ({ match, blocks, index }) => {
  const decoded = convertMatchToData(match);
  if (decoded.index !== index) return false;
  if (convertBlocksToHash(decoded.blocks) !== convertBlocksToHash(blocks)) return false;
  return true;
};

const Sync = ({ match, blocks, index }) =>
  isInSync({ match, blocks, index }) ? null : (
    <Redirect to={`/quiz/${encodeStateToString({ blocks, index })}`} />
  );

const StepButton = ({ ...props }) => (
  <button
    style={{
      cursor: 'pointer',
      width: '60px',
      height: '60px'
    }}
    {...props}
  />
);

const Progress = ({ blocks, index }) => (
  <div style={{ textAlign: 'center', color: 'white' }}>
    {Math.floor(100 * index / blocks.length)}% done
  </div>
);

const Component = ({ match, blocks, index, setBlocks, setIndex }) => (
  <React.Fragment>
    <div
      style={{
        height: '100vh',
        backgroundColor: index < blocks.length ? blocks[index].color : 'white',
        transition: 'background-color 0.8s'
      }}
    >
      <AppBar />
      <br />
      <br />
      <br />

      {index < blocks.length ? (
        <React.Fragment>
          <br />
          <br />
          <Progress blocks={blocks} index={index} />
          <Question
            block={blocks[index]}
            onChange={value => {
              setBlocks([
                ...blocks.slice(0, index),
                {
                  ...blocks[index],
                  value: value
                },
                ...blocks.slice(index + 1, blocks.length)
              ]);
            }}
          />
          <React.Fragment>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <StepButton onClick={() => setIndex(index - 1)} disabled={index === 0}>
                prev
              </StepButton>
              <StepButton onClick={() => setIndex(index + 1)}>skip</StepButton>
              <StepButton onClick={() => setIndex(index + 1)}>
                {index === blocks.length - 1 ? 'Finish' : 'Next'}
              </StepButton>
            </div>
          </React.Fragment>
        </React.Fragment>
      ) : (
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
      )}
      <br />

      <Sync match={match} blocks={blocks} index={index} />
    </div>
  </React.Fragment>
);

export default compose(
  withState('blocks', 'setBlocks', ({ match }) => {
    console.log(match);
    const { blocks } = convertMatchToData(match);
    return blocks;
  }),
  withState('index', 'setIndex', ({ match }) => {
    const { index } = convertMatchToData(match);
    return index;
  })
)(Component);
