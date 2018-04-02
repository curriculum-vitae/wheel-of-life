import {
  compose,
  find,
  flow,
  map
} from 'lodash/fp'
import React from 'react'
import { setDisplayName } from 'recompose'
import BarChart from './BarChart'

const Component = ({ blocks }) => (
  <BarChart data={blocks} />
)

export default compose(setDisplayName('DefaultComponentName'))(Component)
