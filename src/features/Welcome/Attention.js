import { Avatar, Grid, Typography } from '@material-ui/core'

import React from 'react'

export default () => (
  <React.Fragment>
    <Grid container spacing={40}>
      <Grid item xs={12} md={5}>
        <Avatar
          style={{
            float: 'right',
            marginBottom: '12px',
            width: '120px',
            height: '120px',
          }}
          src={'/images/ava.jpg'}
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography variant={'display1'} gutterBottom>
          Hey! <br />
          <br />I’ve applied this simple technique for myself and it's changing
          my life in the best possible way.
        </Typography>
        <Typography variant={'display1'} gutterBottom>
          It might not work for you, but you are two minutes away to figure this
          out.
        </Typography>
        <Typography align={'right'}>
          © co-creator of wheel-of-life.guru
        </Typography>
      </Grid>
    </Grid>
  </React.Fragment>
)
