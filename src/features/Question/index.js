import { flow, times } from 'lodash/fp';

import React from 'react';

export default ({ block, onChange = () => {} }) => (
  <div>
    <h3>How do you feel about {block.name}?</h3>

    {times(index => (
      <button
        style={{
          border: block.value === index + 1 ? '1px solid red' : undefined
        }}
        key={index + 1}
        onClick={() => onChange(index + 1)}
      >
        {index + 1}
      </button>
    ))(10)}
  </div>
);
