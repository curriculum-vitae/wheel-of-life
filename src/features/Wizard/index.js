import { compose, withProps, withState } from 'recompose';
import { decodeStateFromString, encodeStateToString } from '../../common/helpers';
import { flow, reduce, sortBy } from 'lodash/fp';

import Question from '../Question';
import React from 'react';
import { Redirect } from 'react-router-dom';
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

const Component = ({ match, blocks, index, setBlocks, setIndex }) => (
  <React.Fragment>
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
    <br />

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
        <StepButton onClick={() => setIndex(index + 1)} disabled={index === blocks.length - 1}>
          skip
        </StepButton>
        <StepButton onClick={() => setIndex(index + 1)} disabled={index === blocks.length - 1}>
          next
        </StepButton>
      </div>
    </React.Fragment>
    <br />
    <h2>Result</h2>
    <Wheel blocks={blocks} />
    <br />
    <button>Share</button>
    <Sync match={match} blocks={blocks} index={index} />
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
