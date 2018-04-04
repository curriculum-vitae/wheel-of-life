import { compose, withProps } from 'recompose'

import AppBar from 'features/AppBar'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import React from 'react'
import Share from 'features/Share'
import { Wheel } from 'features/Wheel'
import { decodeStateFromString } from 'utils/helpers'

const Column = ({ children }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
    <div style={{ width: '40%' }}>{children}</div>
  </div>
)

const Results = ({ setIndex = () => {}, blocks, index = 0 }) => (
  <React.Fragment>
    <AppBar color={'black'} />
    <br />
    <Column>
      <h2>Results</h2>
    </Column>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Wheel blocks={blocks} />
    </div>
    <br />
    <Column>
      <h2>Actions</h2>
      <Link to={'/quiz'}>
        <Button>Start again</Button>
      </Link>
      <Link to={'/'}>
        <Button>Visit main page</Button>
      </Link>
      <h2>Sharing</h2>

      <Share blocks={blocks} />
      <h2>What is next?</h2>

      <p>Find what sphere are lacking your attention.</p>
      <p>Go fix</p>
      <p>There are coaches</p>
      <p>There is literature</p>
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
