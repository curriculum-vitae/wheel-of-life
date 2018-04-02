import { Button, Grid } from 'semantic-ui-react'

import AppBar from 'features/AppBar'
import { Link } from 'react-router-dom'
import React from 'react'
import { red } from 'utils/colors'

const Point = ({ title, text }) => (
  <div>
    <h1>{title}</h1>
    <p>{text}</p>
  </div>
)

const AttentionBox = () => (
  <div
    style={{
      backgroundColor: red[700],
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
            <h3>
              Life happens to be imbalance. Eventually it causes troubles.
            </h3>
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
            <h3>Nope. We don’t have it. But...</h3>
            <h3>
              Good solution is a matter of good questions. And we do have some.
            </h3>
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
