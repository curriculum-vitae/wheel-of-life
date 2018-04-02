import { compose, withProps, withState, withStateHandlers } from 'recompose'

import AppBar from 'features/AppBar'
import { BLOCKS } from 'utils/constants'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Progress } from 'semantic-ui-react'
import Question from 'features/Question'
import React from 'react'
import { encodeStateToString } from 'utils/helpers'

const StepButton = ({ ...props }) => <Button size={'huge'} {...props} />

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
        transition: 'background-color 1.0s',
      }}>
      <AppBar />
      <Progress
        style={{
          margin: '0px',
          borderRadius: '0',
        }}
        success
        progress
        percent={Math.ceil(100 * index / (blocks.length - 1))}
      />
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
              padding: '0px 40px',
              marginTop: '100px',
              justifyContent: 'space-between',
            }}>
            <StepButton
              onClick={() => setIndex(index - 1)}
              disabled={index === 0}>
              Back
            </StepButton>
            <StepButton
              disabled={isFinished}
              onClick={() => {
                updateBlockWithValue({ index, value: 0 })
                setIndex(index + 1)
              }}>
              Skip
            </StepButton>
            {isLastStep ? (
              <Link to={`/results/${encodeStateToString({ blocks })}`}>
                <StepButton onClick={() => setIndex(index + 1)}>
                  Show results
                </StepButton>
              </Link>
            ) : (
              <StepButton onClick={() => setIndex(index + 1)}>Next</StepButton>
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
