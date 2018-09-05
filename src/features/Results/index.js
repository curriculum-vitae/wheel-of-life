import { Button, Grid, Paper, Typography } from '@material-ui/core'
import { compose, withProps } from 'recompose'

import { AppBar } from 'features/AppBar'
import { BLOCKS } from 'utils/constants'
import { Link } from 'react-router-dom'
import React from 'react'
import { Share } from 'features/Share'
import { Wheel } from 'features/Wheel'
import { decodeStateFromString } from 'utils/helpers'
import { withContentRect } from 'react-measure'

const PROPORTION_OF_WHEEL_ON_PAGE = 1

const getAverage = ({ blocks }) => {
  return (
    blocks.reduce((summ, block) => (summ = summ + block.value), 0) /
    blocks.length
  )
}

const mapAverageToGrade = average => {
  if (average >= 0 && average <= 3) return 'really bad'
  if (average > 3 && average <= 5) return 'pretty bad'
  if (average > 5 && average <= 8) return 'average'
  if (average > 8 && average <= 9) return 'pretty good'
  if (average > 9 && average <= 10) return 'awesome'
  return 'ERROR'
}

const Legend = ({ blocks }) => (
  <React.Fragment>
    <Grid container spacing={16}>
      {blocks.map((block, index) => (
        <Grid
          item
          xs={12}
          md={6}
          style={{ padding: '8px' }}
          key={BLOCKS[index].name}>
          <div
            style={{
              height: '72%',
              width: '20px',
              marginRight: '4px',
              backgroundColor: BLOCKS[index].color,
              display: 'inline-block',
            }}
          />

          <Typography
            style={{
              display: 'inline-block',
            }}>
            {BLOCKS[index].name}
          </Typography>
          <Typography
            style={{
              display: 'inline-block',
              width: '20px',
              float: 'right',
              marginRight: '10px',
            }}
            align={'right'}>
            {block.value}
          </Typography>
        </Grid>
      ))}
    </Grid>
  </React.Fragment>
)

const Column = ({ children, measureRef }) => (
  <Grid container justify={'center'}>
    <Grid item xs={12} md={4}>
      <div ref={measureRef}>{children}</div>
    </Grid>
  </Grid>
)

const Header = ({ children, ...props }) => (
  <Typography variant={'title'} gutterBottom children={children} {...props} />
)

const Score = compose(
  withProps(({ blocks }) => ({
    average: getAverage({ blocks }),
  })),
)(({ average }) => (
  <React.Fragment>
    <Typography align={'center'} gutterBottom variant={'display1'}>
      Your Life Balance Score
    </Typography>

    <Typography align={'center'} variant={'display4'}>
      <b>{String(average).slice(0, 3)}</b>
    </Typography>

    <Typography variant={'body2'} align={'center'}>
      That's {mapAverageToGrade(average)}.
    </Typography>
  </React.Fragment>
))

const NextActions = () => (
  <React.Fragment>
    <ul>
      <li>Find what sphere are lacking your attention.</li>
      <li>
        Find out ways to improve it
        <ul>
          <li>Find your motivation</li>
          <li>Put more effort</li>
          <li>Spend less time to other spheres</li>
          <li>Check articles</li>
        </ul>
      </li>
      <li>
        Consider this as helpers
        <ul>
          <li>Reading articles</li>
          <li>Reading books</li>
          <li>Watching lectures</li>
          <li>Finding a coach</li>
        </ul>
      </li>
    </ul>
  </React.Fragment>
)

const Component = ({ blocks, measureRef, measure, contentRect }) => (
  <React.Fragment>
    <AppBar />
    <br />
    <br />

    <Column measureRef={measureRef}>
      <div style={{ padding: '0px 20px' }}>
        {contentRect.entry && contentRect.entry.width ? (
          <Wheel
            height={Number(
              contentRect.entry.width * PROPORTION_OF_WHEEL_ON_PAGE,
            )}
            width={Number(
              contentRect.entry.width * PROPORTION_OF_WHEEL_ON_PAGE,
            )}
            blocks={blocks}
          />
        ) : null}
      </div>

      <br />
      <br />
      <div style={{ padding: '0px 20px' }}>
        <Legend blocks={blocks} />
      </div>
      <br />
      <br />
      <Paper style={{ padding: '20px' }}>
        <Score blocks={blocks} />
        <br />
        <br />

        <Header>What is next?</Header>
        <NextActions />
        <br />
        <br />
        <Header>Actions</Header>
        <React.Fragment>
          <Link to={'/quiz'}>
            <Button variant={'outlined'}>Start again</Button>
          </Link>
        </React.Fragment>
        <br />
        <br />
        <br />
        <br />
        <Header>Sharing</Header>
        <Share blocks={blocks} />
      </Paper>
    </Column>
    <br />
    <br />
    <br />
    <br />
  </React.Fragment>
)

export const Results = compose(
  withProps(props => ({
    blocks: decodeStateFromString(props.match.params.state).blocks,
  })),
  withContentRect('bounds'),
)(Component)
