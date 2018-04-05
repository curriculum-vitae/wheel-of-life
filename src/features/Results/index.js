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
        backgroundColor: grey[100],
        padding: '20px',
        borderRadius: '2px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      }}>
      {children}
    </div>
  </div>
)

const NextActions = compose(
  withProps(({ blocks }) => ({
    average: getAverage({ blocks }),
  })),
)(({ blocks, average }) => (
  <React.Fragment>
    <h2>What is next?</h2>
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
  <React.Fragment>
    <AppBar color={'black'} />
    <div style={{ background: `${grey[300]}`, height: '1px' }} />
    <br />
    <Column>
      <h2>Results</h2>
      {/* Hacking */}
      <div style={{ marginLeft: '-140px' }}>
        <Wheel blocks={blocks} />
      </div>
      <br />
      <h2>Actions</h2>
      <Link to={'/quiz'}>
        <Button>Start again</Button>
      </Link>
      <Link to={'/'}>
        <Button>Visit main page</Button>
      </Link>
      <h2>Sharing</h2>

      <Share blocks={blocks} />
      <NextActions blocks={blocks} />
    </Column>
    <br />
    <br />
    <br />
    <br />
  </React.Fragment>
)

export default compose(
  withProps(props => ({
    blocks: decodeStateFromString(props.match.params.state).blocks,
  })),
)(Results)
