import { Link, Redirect } from 'react-router-dom';
import { compose, withProps, withState } from 'recompose';
import { convertBlocksToHash, convertMatchToData } from 'features/Wizard/helpers';
import { decodeStateFromString, encodeStateToString } from 'common/helpers';
import { flow, reduce, sortBy } from 'lodash/fp';

import AppBar from 'features/AppBar';
import { BLOCKS } from 'common/constants';
import Progress from 'features/Progress';
import Question from 'features/Question';
import React from 'react';
import Results from 'features/Results';
import Share from 'features/Share';
import Wheel from 'features/Wheel';

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

const Component = ({ match, blocks, index, setBlocks, setIndex, isFinished, isLastStep }) => (
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
      <React.Fragment>
        <br />
        <br />
        <Progress blocks={blocks} index={index} />
        {isFinished ? (
          <h1 style={{ textAlign: 'center', fonstSize: '60px', color: 'white' }}>DONE</h1>
        ) : (
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
        )}
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
            <StepButton disabled={isFinished} onClick={() => setIndex(index + 1)}>
              skip
            </StepButton>
            {isLastStep ? (
              <Link to={`/results/${encodeStateToString({ blocks })}`}>
                <StepButton onClick={() => setIndex(index + 1)}>FINISH</StepButton>
              </Link>
            ) : (
              <StepButton onClick={() => setIndex(index + 1)}>NEXT</StepButton>
            )}
          </div>
        </React.Fragment>
      </React.Fragment>
    </div>
  </React.Fragment>
);

export default compose(
  withState('blocks', 'setBlocks', BLOCKS),
  withState('index', 'setIndex', 0),
  withProps(props => ({
    isLastStep: props.index === props.blocks.length - 1,
    isFinished: props.index >= props.blocks.length - 1
  }))
)(Component);
