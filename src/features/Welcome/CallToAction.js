import { Button, Typography } from '@material-ui/core'

import { Link } from 'react-router-dom'
import React from 'react'
import { orange } from '@material-ui/core/colors'

export default () => (
  <div style={{ textAlign: 'center' }}>
    <Typography align={'center'} variant={'display4'} gutterBottom>
      What's your<br />
      <span
        style={{
          fontWeight: '900',
        }}>
        Life Balance Score?
      </span>
    </Typography>

    <Link to={'/quiz'}>
      <Button variant={'raised'} color={'primary'} size={'large'}>
        Start To Find Out
      </Button>
      <Typography variant={'body2'} style={{ color: orange[600] }}>
        it's completely free
      </Typography>
      <br />
      <br />
    </Link>
  </div>
)
