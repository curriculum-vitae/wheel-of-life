import { Button, Grid } from '@material-ui/core'
import { compose, withProps, withState, withStateHandlers } from 'recompose'

import { AppBar } from 'features/AppBar'
import { BLOCKS } from 'utils/constants'
import { Question } from 'features/Question'
import React from 'react'
import { WizardDone } from 'features/Wizard/components/Done'

const StepButton = ({ ...props }) => (
  <Button variant={'raised'} size={'large'} {...props} />
)

const Component = ({
  blocks,
  index,
  setIndex,
  isFinished,
  isLastStep,
  updateBlockWithValue,
}) => (
  <React.Fragment>
    <div
      style={{
        height: '100vh',
      }}>
      <AppBar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <React.Fragment>
        <Grid container justify={'center'}>
          <Grid item xs={12} md={4}>
            {isFinished ? (
              <WizardDone setIndex={setIndex} index={index} blocks={blocks} />
            ) : (
              <Question
                block={blocks[index]}
                onChange={value => {
                  updateBlockWithValue({ index, value })
                  setIndex(index + 1)
                }}
              />
            )}
            <br />
            <br />
            <div
              style={{
                display: 'flex',
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
              <StepButton
                disabled={isLastStep}
                onClick={() => setIndex(index + 1)}>
                Next
              </StepButton>
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  </React.Fragment>
)

export const Wizard = compose(
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
  withState(
    'index',
    'setIndex',
    process.env.NODE_ENV === 'development' ? BLOCKS.length - 2 : 0,
  ),
  withProps(props => ({
    isLastStep: props.index === props.blocks.length - 1,
    isFinished: props.index >= props.blocks.length - 1,
  })),
)(Component)
