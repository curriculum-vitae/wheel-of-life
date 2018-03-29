import { compose, flow, map } from 'lodash/fp';

import { OrdinalFrame } from 'semiotic';
import React from 'react';
import { SAMPLE_WIND_ROSE_DATA } from './constants';
import { setDisplayName } from 'recompose';

const mapPropsToQueries = () => [];

const convertBlocksToWindRoseData = blocks => {
  const STEP = 360 / blocks.length;
  return flow(
    map(block => ({
      label: block.name,
      angle: `${STEP * blocks.indexOf(block)} - ${STEP * (blocks.indexOf(block) + 1)}`,
      value: block.value
    }))
  )(blocks);
};

const colorHash = {
  Health: 'red',
  Carreer: 'blue',
  Fun: 'orange',
  Friends: 'white',
  Family: 'yellow',
  'Personal development': 'grey',
  Spirituality: 'purple',
  Environment: 'green',
  undefined: 'black'
};

const Component = ({ blocks }) => (
  <OrdinalFrame
    size={[400, 400]}
    data={convertBlocksToWindRoseData(blocks)}
    oAccessor={'label'}
    rAccessor={'value'}
    style={d => ({ fill: colorHash[d.label] })}
    type={'bar'}
    projection={'radial'}
    axis={{
      label: { name: 'Windiness', locationDistance: 5 }
    }}
    oPadding={1}
    margin={{ bottom: 20, top: 20, left: 20, right: 20 }}
    hoverAnnotation={true}
  />
);

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

export default compose(setDisplayName('DefaultComponentName'))(Component);
