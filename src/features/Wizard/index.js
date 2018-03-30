import { Link, Redirect } from 'react-router-dom';
import { compose, withProps, withState } from 'recompose';
import { decodeStateFromString, encodeStateToString } from 'common/helpers';
import { flow, reduce, sortBy } from 'lodash/fp';

import AppBar from 'features/AppBar';
import { BLOCKS } from 'common/constants';
import Question from 'features/Question';
import React from 'react';
import Results from 'features/Results';
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
        <Results blocks={blocks} index={index} setIndex={setIndex} />
      )}
    </div>
  </React.Fragment>
);

export default compose(withState('blocks', 'setBlocks', BLOCKS), withState('index', 'setIndex', 0))(
  Component
);
