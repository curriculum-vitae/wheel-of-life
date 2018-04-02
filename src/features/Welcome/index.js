import { Button, Grid } from 'semantic-ui-react'

import AppBar from 'features/AppBar'
import { Link } from 'react-router-dom'
import React from 'react'

const Point = ({ title, text }) => (
  <div>
    <h1>{title}</h1>
    <p>{text}</p>
  </div>
)

const AttentionBox = () => (
  <div
    style={{
      textAlign: 'center',
      backgroundColor: 'red',
      color: 'white',
      width: '40%',
      padding: '40px',
    }}>
    <h1>I’ve tried it for myself. It changed my left. </h1>

    <h1>
      It might not work for you. You are two minutes away to figure this out.
    </h1>
  </div>
)

export default () => (
  <div>
    <AppBar color={'black'} />
    <br />
    <br />
    <br />
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <AttentionBox />
    </div>

    <Grid columns={2} relaxed={0}>
      <Grid.Column>
        <h1 style={{ textAlign: 'center', fontSize: '60px' }}>
          Problem definition
        </h1>
        <p
          style={{
            padding: '60px',
          }}>
          Life happens to be imbalance. It will cause troubles.
        </p>
      </Grid.Column>
      <Grid.Column>
        <img
          style={{
            width: '100%',
          }}
          alt={'Background'}
          src={'https://www.w3schools.com/howto/img_fjords.jpg'}
        />
      </Grid.Column>
    </Grid>

    <Grid columns={2}>
      <Grid.Column>
        <img
          style={{
            width: '100%',
          }}
          alt={'Background'}
          src={'https://www.w3schools.com/howto/img_fjords.jpg'}
        />
      </Grid.Column>
      <Grid.Column>
        <h1 style={{ textAlign: 'center', fontSize: '60px' }}>Solution</h1>
        <p
          style={{
            padding: '60px',
          }}>
          > Nope. We don’t have it. Good solution is a matter of good questions.
          What we have is 10 good questions. Rest is yours job.
        </p>
      </Grid.Column>
    </Grid>
    <div style={{ textAlign: 'center', marginTop: '80px', padding: '40px' }}>
      <Link to={'/quiz'}>
        <Button color={'orange'} size={'massive'}>
          Start questioning your life
        </Button>
      </Link>
    </div>
  </div>
)
