import { Avatar, Grid, Icon, Typography } from '@material-ui/core'

import { AppBar } from 'features/AppBar'
import React from 'react'
import { red } from '@material-ui/core/colors'

export const OpenGraph = () => (
  <React.Fragment>
    <AppBar />
    <br />
    <br />
    <br />
    <br />
    <Grid container>
      <Grid item xs={12} md={4}>
        <Avatar
          style={{
            width: '200px',
            height: '200px',
            float: 'right',
            marginRight: '60px',
          }}>
          ME
        </Avatar>
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant={'display4'} gutterBottom>
          Hey!
        </Typography>
        <Typography variant={'display4'} gutterBottom>
          Check out my <br />
          <span style={{ color: red[400], fontWeight: '500' }}>
            Life Balance Score
          </span>
          !
        </Typography>
      </Grid>
    </Grid>
  </React.Fragment>
)
