import { Button, List } from 'semantic-ui-react'
import { compose, withProps } from 'recompose'

import AppBar from 'features/AppBar'
import { Link } from 'react-router-dom'
import React from 'react'
import Share from 'features/Share'
import { Wheel } from 'features/Wheel'
import { decodeStateFromString } from 'utils/helpers'
import { grey } from 'utils/colors'

const getAverage = ({ blocks }) => {
  return (
    blocks.reduce((summ, block) => (summ = summ + block.value), 0) /
    blocks.length
  )
}

const mapAverageToGrade = average => {
  if (average >= 0 && average <= 3) return 'really bad'
  if (average > 3 && average <= 5) return 'pretty bad'
  if (average > 5 && average <= 8) return 'average'
  if (average > 8 && average <= 10) return 'pretty good'
  return 'ERROR'
}

const Column = ({ children }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
    <div
      style={{
        width: '48%',
        padding: '14px 20px',
        borderRadius: '1px',
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      }}>
      {children}
    </div>
  </div>
)

const Header = ({ children, ...props }) => (
  <h4
    style={{
      color: grey[700],
    }}
    children={children}
    {...props}
  />
)

const NextActions = compose(
  withProps(({ blocks }) => ({
    average: getAverage({ blocks }),
  })),
)(({ blocks, average }) => (
  <React.Fragment>
    Your average score is <b>{String(average).slice(0, 3)}</b>. That's{' '}
    {mapAverageToGrade(average)}.
    <br />
    <List ordered>
      <List.Item>Find what sphere are lacking your attention.</List.Item>
      <List.Item>
        Find out ways to improve it
        <List.List>
          <List.Item>Find your motivation</List.Item>
          <List.Item>Put more effort</List.Item>
          <List.Item>Spend less time to other spheres</List.Item>
          <List.Item>Check articles</List.Item>
        </List.List>
      </List.Item>
      <List.Item>
        Consider this as helpers
        <List.List>
          <List.Item>Reading articles</List.Item>
          <List.Item>Reading books</List.Item>
          <List.Item>Watching lectures</List.Item>
          <List.Item>Finding a coach</List.Item>
        </List.List>
      </List.Item>
    </List>
  </React.Fragment>
))

const Results = ({ setIndex = () => {}, blocks, index = 0 }) => (
  <div
    style={{
      backgroundColor: grey[200],
    }}>
    <AppBar color={'black'} />
    <div style={{ height: '1px' }} />
    <br />
    <Column>
      <Header>Results</Header>
      {/* Hacking */}

      <Wheel blocks={blocks} />

      <Header>What is next?</Header>
      <NextActions blocks={blocks} />
      <Header>Actions</Header>
      <React.Fragment>
        <Link to={'/quiz'}>
          <Button>Start again</Button>
        </Link>
      </React.Fragment>
      <Header>Sharing</Header>

      <Share blocks={blocks} />
    </Column>
    <br />
    <br />
    <br />
    <br />
  </div>
)

export default compose(
  withProps(props => ({
    blocks: decodeStateFromString(props.match.params.state).blocks,
  })),
)(Results)
