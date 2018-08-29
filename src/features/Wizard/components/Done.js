import { Button, Typography } from '@material-ui/core'
import { map, pick } from 'lodash/fp'

import { Link } from 'react-router-dom'
import React from 'react'
import { encodeStateToString } from 'utils/helpers'
import { green } from '@material-ui/core/colors'

const PROPS_TO_PASS_TO_RESULTS = ['id', 'value']

const WizardDone = ({ setIndex, index, blocks }) => (
  <div>
    <Typography
      align={'center'}
      variant={'display3'}
      gutterBottom
      style={{
        color: green[700],
      }}>
      DONE!
    </Typography>
    <Button
      size={'large'}
      component={Link}
      style={{
        width: '100%',
      }}
      variant={'raised'}
      to={`/results/${encodeStateToString({
        blocks: map(pick(PROPS_TO_PASS_TO_RESULTS))(blocks),
      })}`}
      onClick={() => setIndex(index + 1)}>
      Show results
    </Button>
  </div>
)

export { WizardDone }
