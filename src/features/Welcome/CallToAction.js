import { orange, red } from '@material-ui/core/colors'

import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React from 'react'

export default () => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <br />
    <br />

    <h1 style={{ color: red[500] }}>
      What's your{' '}
      <span
        style={{
          fontWeight: '900',
        }}>
        Life Balance Score?
      </span>
    </h1>
    <h3>Use this simple tool to find out</h3>
    <br />

    <Link to={'/quiz'}>
      <Button variant={'raised'} color={'primary'} size={'large'}>
        Start questioning your life
      </Button>
      <p style={{ color: orange[600] }}>it's completely free</p>
      <br />
      <br />
    </Link>
  </div>
)
