import { compose, withProps, withState } from 'recompose';

import Question from '../Question';
import React from 'react';
import Wheel from '../Wheel';
import { decodeStateFromString } from '../../common/helpers';

const Component = ({ blocks, index, setBlocks, setIndex }) => (
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
    <button onClick={() => setIndex(index - 1)} disabled={index === 0}>
      prev
    </button>
    <button onClick={() => setIndex(index + 1)} disabled={index === blocks.length - 1}>
      skip
    </button>
    <button onClick={() => setIndex(index + 1)} disabled={index === blocks.length - 1}>
      next
    </button>
    <br />
    <h2>Result</h2>
    <Wheel blocks={blocks} />
    <br />
    <button>Share</button>
  </React.Fragment>
);

const convertMatchToData = match => {
  const str = match.url.replace('/', '');

  return decodeStateFromString(str);
};

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
