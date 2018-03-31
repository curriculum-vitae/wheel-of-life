import { compose, withProps, withState, withStateHandlers } from 'recompose'

import AppBar from 'features/AppBar'
import { BLOCKS } from 'common/constants'
import { Link } from 'react-router-dom'
import { Progress } from 'semantic-ui-react'
import Question from 'features/Question'
import React from 'react'
import { encodeStateToString } from 'common/helpers'

const StepButton = ({ ...props }) => (
  <button
    style={{
      cursor: 'pointer',
      width: '60px',
      height: '60px',
    }}
    {...props}
  />
)

const Component = ({
  match,
  blocks,
  index,
  setBlocks,
  setIndex,
  isFinished,
  isLastStep,
  updateBlockWithValue,
}) => (
  <React.Fragment>
    <div
      style={{
        height: '100vh',
        backgroundColor: index < blocks.length ? blocks[index].color : 'white',
        transition: 'background-color 0.8s',
      }}>
      <Progress
        success
        progress
        percent={Math.ceil(100 * index / (blocks.length - 1))}
      />

      <AppBar />
      <br />
      <br />
      <br />
      <React.Fragment>
        <br />
        <br />
        {isFinished ? (
          <h1
            style={{ textAlign: 'center', fonstSize: '60px', color: 'white' }}>
            DONE
          </h1>
        ) : (
          <Question
            block={blocks[index]}
            onChange={value => {
              updateBlockWithValue({ index, value })
              setIndex(index + 1)
            }}
          />
        )}
        <React.Fragment>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <StepButton
              onClick={() => setIndex(index - 1)}
              disabled={index === 0}>
              prev
            </StepButton>
            <StepButton
              disabled={isFinished}
              onClick={() => {
                updateBlockWithValue({ index, value: 0 })
                setIndex(index + 1)
              }}>
              skip
            </StepButton>
            {isLastStep ? (
              <Link to={`/results/${encodeStateToString({ blocks })}`}>
                <StepButton onClick={() => setIndex(index + 1)}>
                  FINISH
                </StepButton>
              </Link>
            ) : (
              <StepButton onClick={() => setIndex(index + 1)}>NEXT</StepButton>
            )}
          </div>
        </React.Fragment>
      </React.Fragment>
    </div>
  </React.Fragment>
)

export default compose(
  withState('blocks', 'setBlocks', BLOCKS),
  withStateHandlers(null, {
    updateBlockWithValue: (state, { setBlocks, blocks }) => ({
      index,
      value,
    }) => {
      setBlocks([
        ...blocks.slice(0, index),
        {
          ...blocks[index],
          value: value,
        },
        ...blocks.slice(index + 1, blocks.length),
      ])
    },
  }),
  withState('index', 'setIndex', 0),
  withProps(props => ({
    isLastStep: props.index === props.blocks.length - 1,
    isFinished: props.index >= props.blocks.length - 1,
  })),
)(Component)
