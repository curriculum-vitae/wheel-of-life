import { Avatar, Grid } from '@material-ui/core'

import { AppBar } from 'features/AppBar'
import React from 'react'
import { red } from '@material-ui/core/colors'

export default () => (
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
      }}>
      <Grid container spacing={16}>
        <Grid item xs={12} md={5}>
          <Avatar
            style={{
              float: 'right',
              marginBottom: '12px',
              width: '160px',
              height: '160px',
            }}
            src={'/images/ava.jpg'}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <div>
            <h1>«Hey! I’ve tried it for myself and it changed my life.</h1>
            <h1>
              It might not work for you, but you are two minutes away to figure
              this out.»
            </h1>
            <h3 style={{ textAlign: 'right' }}>
              © co-creator of wheel-of-life.guru
            </h3>
            <br />
            <br />
          </div>
        </Grid>
      </Grid>
    </div>
  </div>
)
