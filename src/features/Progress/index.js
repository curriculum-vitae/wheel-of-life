import { Progress } from 'semantic-ui-react'
import React from 'react'

export default ({ blocks, index }) => (
  <Progress
    success
    progress
    percent={Math.floor(100 * index / blocks.length)}
  />
)
