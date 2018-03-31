import { compose, find, flow, map } from 'lodash/fp'

import { BLOCKS } from 'utils/constants'
import { OrdinalFrame } from 'semiotic'
import React from 'react'
import { SAMPLE_WIND_ROSE_DATA } from 'features/Wheel/constants'
import { setDisplayName } from 'recompose'

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
  <div
    style={{
      marginLeft: `-${SIZE}px`,
    }}>
    <OrdinalFrame
      size={[SIZE, SIZE]}
      data={convertBlocksToWindRoseData(blocks)}
      oAccessor={'label'}
      rAccessor={'value'}
      style={d => ({ fill: getColor(d.label) })}
      type={'bar'}
      projection={'radial'}
      axis={{
        label: { name: 'Windiness', locationDistance: 5 },
      }}
      oPadding={1}
      margin={{ bottom: 20, top: 20, left: 20, right: 20 }}
      hoverAnnotation={true}
    />
  </div>
)

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {}

export default compose(setDisplayName('DefaultComponentName'))(Component)
