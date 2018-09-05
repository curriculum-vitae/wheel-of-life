import {
  AppBar as AppBarMaterial,
  Toolbar,
  Typography,
} from '@material-ui/core'

import { Link } from 'react-router-dom'
import React from 'react'
import { grey } from '@material-ui/core/colors'

export const AppBar = () => (
  <AppBarMaterial position={'sticky'}>
    <Toolbar>
      <Typography
        variant={'title'}
        color={'inherit'}
        style={{ color: 'black' }}>
        <Link to={'/'}>Wheel of Life</Link>
      </Typography>
    </Toolbar>
  </AppBarMaterial>
)
