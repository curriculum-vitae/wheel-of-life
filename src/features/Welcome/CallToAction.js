import { Button, Typography } from '@material-ui/core'

import { Link } from 'react-router-dom'
import React from 'react'
import { orange } from '@material-ui/core/colors'

export default () => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <Typography align={'center'} variant={'display3'} gutterBottom>
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
      <p style={{ color: orange[600] }}>it's completely free</p>
      <br />
      <br />
    </Link>
  </div>
)
