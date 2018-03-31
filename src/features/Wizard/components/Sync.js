import React from 'react'
import { Redirect } from 'react-router-dom'
import { encodeStateToString } from 'utils/helpers'
import { isInSync } from 'features/Wizard/helpers'

export default ({ match, blocks, index }) =>
  isInSync({ match, blocks, index }) ? null : (
    <Redirect to={`/quiz/${encodeStateToString({ blocks, index })}`} />
  )
