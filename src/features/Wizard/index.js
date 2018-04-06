import { compose, withProps, withState, withStateHandlers } from 'recompose'

import { AppBar } from 'features/AppBar'
import { BLOCKS } from 'utils/constants'
import { Button } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import { Progress } from 'semantic-ui-react'
import { Question } from 'features/Question'
import React from 'react'
import { WizardDone } from 'features/Wizard/components/Done'

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
      <br />
      <br />
      <React.Fragment>
        <Grid centered columns={1}>
          <Grid.Column
            mobile={14}
            tablet={10}
            computer={8}
            style={{ maxWidth: '600px' }}>
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
            <React.Fragment>
              <div
                style={{
                  marginTop: '40px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                <StepButton
                  fluid
                  onClick={() => setIndex(index - 1)}
                  disabled={index === 0}>
                  Back
                </StepButton>
                <StepButton
                  fluid
                  disabled={isFinished}
                  onClick={() => {
                    updateBlockWithValue({ index, value: 0 })
                    setIndex(index + 1)
                  }}>
                  Skip
                </StepButton>
                <StepButton
                  disabled={isLastStep}
                  fluid
                  onClick={() => setIndex(index + 1)}>
                  Next
                </StepButton>
              </div>
            </React.Fragment>
          </Grid.Column>
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
  withState('index', 'setIndex', BLOCKS.length - 2),
  withProps(props => ({
    isLastStep: props.index === props.blocks.length - 1,
    isFinished: props.index >= props.blocks.length - 1,
  })),
)(Component)
