import { Button, Grid } from 'semantic-ui-react'

import { Link } from 'react-router-dom'
import React from 'react'

const Point = ({ title, text }) => (
  <div>
    <h1>{title}</h1>
    <p>{text}</p>
  </div>
)

export default () => (
  <div>
    <h1 style={{ textAlign: 'center', fontSize: '60px' }}>Well hello</h1>

    <h3 style={{ textAlign: 'center' }}>Whant to balance your life?</h3>
    <div style={{ textAlign: 'center' }}>
      <Link to={'/quiz'}>
        <Button>Start</Button>
      </Link>
    </div>
    <Grid columns={1}>
      <Grid.Column>
        <Point title={'What is here?'} text={'A tool to improve your life'} />
      </Grid.Column>
      <Grid.Column>
        <Point title={'Why is this?'} text={'It just 1 minute.'} />
      </Grid.Column>
    </Grid>
  </div>
)
