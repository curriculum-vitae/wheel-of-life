import {
  AppBar as AppBarMaterial,
  Toolbar,
  Typography,
} from '@material-ui/core'

import { Link } from 'react-router-dom'
import React from 'react'

export const AppBar = ({ color = 'white' }) => (
  <AppBarMaterial>
    <Toolbar>
      <Typography variant={'title'} color={'inherit'}>
        <Link to={'/'}>Wheel of Life</Link>
      </Typography>
    </Toolbar>
  </AppBarMaterial>
)
