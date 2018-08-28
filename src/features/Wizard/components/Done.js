import { map, pick } from 'lodash/fp'

import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React from 'react'
import { encodeStateToString } from 'utils/helpers'

const PROPS_TO_PASS_TO_RESULTS = ['id', 'value']

const WizardDone = ({ setIndex, index, blocks }) => (
  <div>
    <h1
      style={{
        textAlign: 'center',
        fontSize: '60px',
      }}>
      DONE!
    </h1>
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
