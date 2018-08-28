import { Avatar, Grid } from '@material-ui/core'

import { AppBar } from 'features/AppBar'
import Attention from 'features/Welcome/Attention'
import CallToAction from 'features/Welcome/CallToAction'
import React from 'react'

export const Welcome = () => (
  <React.Fragment>
    <AppBar />
    <br />
    <br />
    <div style={{ padding: '0px 20px' }}>
      <Grid container justify={'center'}>
        <Grid item xs={12} sm={4} lg={4} xl={4}>
          <Avatar
            style={{
              textAlign: 'center',
              marginBottom: '12px',
              width: '240px',
              maxWidth: '100%',
              height: '240px',
            }}
            src={'/images/ava.jpg'}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={6} xl={4}>
          <Attention />
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <Grid container justify={'center'}>
        <Grid item xs={12} sm={10} md={6} lg={6} xl={4}>
          <CallToAction />
        </Grid>
      </Grid>
    </div>
  </React.Fragment>
)
