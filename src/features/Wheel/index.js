import { compose, flow, map } from 'lodash/fp';

import React from 'react';
import { setDisplayName } from 'recompose';

const mapPropsToQueries = () => [];

const Component = ({ blocks }) => (
  <div
    style={{
      border: '1px solid black'
    }}
  >
    {flow(
      map(block => (
        <div
          key={block.name}
          style={{
            opacity: (block.value + 1) / 10
          }}
        >
          <div
            style={{
              width: '80%',
              display: 'inline-block'
            }}
          >
            {block.name}
          </div>
          <div
            style={{
              width: '20%',
              display: 'inline-block',
              textAlign: 'right'
            }}
          >
            {block.value}
          </div>
        </div>
      ))
    )(blocks)}
  </div>
);

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

export default compose(setDisplayName('DefaultComponentName'))(Component);
