import { Button, Typography } from '@material-ui/core'
import { map, pick } from 'lodash/fp'

import { Link } from 'react-router-dom'
import React from 'react'
import { encodeStateToString } from 'utils/helpers'
import { green } from '@material-ui/core/colors'

const PROPS_TO_PASS_TO_RESULTS = ['id', 'value']

const WizardDone = ({ setIndex, index, blocks }) => (
  <React.Fragment>
    <Typography
      align={'center'}
      variant={'display3'}
      gutterBottom
      style={{
        color: green[700],
      }}>
      Done!
    </Typography>
    <Button
      size={'large'}
      component={Link}
      style={{
        width: '100%',
        height: '60px',
      }}
      variant={'outlined'}
      color={'primary'}
      to={`/results/${encodeStateToString({
        blocks: map(pick(PROPS_TO_PASS_TO_RESULTS))(blocks),
      })}`}
      onClick={() => setIndex(index + 1)}>
      View results
    </Button>
  </React.Fragment>
)

export { WizardDone }
