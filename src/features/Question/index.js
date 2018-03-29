import { flow, times } from 'lodash/fp';

import React from 'react';

const ButtonForRating = ({ selected, ...props }) => (
  <button
    style={{
      cursor: 'pointer',
      width: '40px',
      height: '40px',
      backgroundColor: selected ? 'purple' : undefined,
      color: selected ? 'white' : undefined
    }}
    {...props}
  />
);

export default ({ block, onChange = () => {} }) => (
  <div
    style={{
      padding: '50px'
    }}
  >
    <h2
      style={{
        textAlign: 'center',
        color: 'white',
        fontWeight: '100',
        fontSize: '48px'
      }}
    >
      {block.name}
    </h2>

    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {times(index => (
        <ButtonForRating
          selected={block.value === index + 1}
          key={index + 1}
          onClick={() => onChange(index + 1)}
        >
          {index + 1}
        </ButtonForRating>
      ))(10)}
    </div>
  </div>
);
