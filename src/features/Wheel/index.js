import {
  compose,
  find,
  flow,
  map
} from 'lodash/fp'
import React from 'react'
import { setDisplayName } from 'recompose'
import { BLOCKS } from 'utils/constants'
import BarChart from './BarChart'

const mapPropsToQueries = () => []

const convertBlocksToWindRoseData = blocks => {
  const STEP = 360 / blocks.length
  return flow(
    map(block => ({
      label: block.name,
      angle: `${STEP * blocks.indexOf(block)} - ${STEP *
      (blocks.indexOf(block) + 1)}`,
      value: block.value,
    })),
  )(blocks)
}

const SIZE = 500

const getColor = label =>
  flow(find(block => block.name === label), block => block.color)(BLOCKS)

const Component = ({ blocks }) => (
  <BarChart data={blocks} />
)

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {}

export default compose(setDisplayName('DefaultComponentName'))(Component)
