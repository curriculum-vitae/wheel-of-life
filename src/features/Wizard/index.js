import { Link, Redirect } from 'react-router-dom';
import { compose, withProps, withState } from 'recompose';
import { decodeStateFromString, encodeStateToString } from '../../common/helpers';
import { flow, reduce, sortBy } from 'lodash/fp';

import Question from '../Question';
import React from 'react';
import Wheel from '../Wheel';

const convertMatchToData = match => {
  const str = match.url.replace('/', '');
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
    <Redirect to={`/${encodeStateToString({ blocks, index })}`} />
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
  <div style={{ textAlign: 'center' }}>{Math.floor(100 * index / blocks.length)}% done</div>
);

const Component = ({ match, blocks, index, setBlocks, setIndex }) => (
  <React.Fragment>
    <div
      style={{
        height: '100vh',
        backgroundColor: index < blocks.length ? blocks[index].color : 'white'
      }}
    >
      <br />
      <br />
      <br />
      <Link to={'/'}>
        <h1 style={{ margin: '0px', textAlign: 'center' }}>Wheel of Life</h1>
      </Link>
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
          <button>Share</button>
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
    const { blocks } = convertMatchToData(match);
    return blocks;
  }),
  withState('index', 'setIndex', ({ match }) => {
    const { index } = convertMatchToData(match);
    return index;
  })
)(Component);
