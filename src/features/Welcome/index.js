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
      backgroundColor: 'red',
      color: 'white',
      width: '100%',
    }}>
    <AppBar />
    <div
      style={{
        padding: '40px',
        textAlign: 'center',
      }}>
      <br />
      <br />
      <h1>I’ve tried it for myself. It changed my left. </h1>

      <h1>
        It might not work for you. You are two minutes away to figure this out.
      </h1>
      <br />
      <br />
    </div>
  </div>
)

export default () => (
  <div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <AttentionBox />
    </div>

    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column
          style={{
            padding: '0px',
          }}>
          <div style={{ padding: '40px' }}>
            <h1 style={{ textAlign: 'center', fontSize: '60px' }}>
              Problem definition
            </h1>
            <p>Life happens to be imbalance. It will cause troubles.</p>
          </div>
        </Grid.Column>
        <Grid.Column
          style={{
            padding: '0px',
          }}>
          <img
            style={{
              width: '100%',
            }}
            alt={'Background'}
            src={'https://www.w3schools.com/howto/img_fjords.jpg'}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column
          color={'red'}
          style={{
            padding: '0px',
          }}>
          <img
            style={{
              width: '100%',
            }}
            alt={'Background'}
            src={'https://www.w3schools.com/howto/img_fjords.jpg'}
          />
        </Grid.Column>
        <Grid.Column
          style={{
            padding: '0px',
          }}>
          <div style={{ padding: '40px' }}>
            <h1
              style={{
                textAlign: 'center',
                fontSize: '60px',
              }}>
              Solution
            </h1>
            <p>
              > Nope. We don’t have it. Good solution is a matter of good
              questions. What we have is 10 good questions. Rest is yours job.
            </p>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <div style={{ textAlign: 'center', marginTop: '80px', padding: '40px' }}>
      <Link to={'/quiz'}>
        <Button color={'orange'} size={'massive'}>
          Start questioning your life
        </Button>
        <br />
        <br />
        <br />
        <br />
      </Link>
    </div>
  </div>
)
