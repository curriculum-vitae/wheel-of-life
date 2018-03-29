import { flow, times } from 'lodash/fp';

import React from 'react';

const ButtonForRating = ({ selected, ...props }) => (
  <button
    style={{
      cursor: 'pointer',
      width: '40px',
      height: '40px',
      border: selected ? '1px solid blue' : undefined
    }}
    {...props}
  />
);

export default ({ block, onChange = () => {} }) => (
  <div
    style={{
      backgroundColor: 'green',
      padding: '50px'
    }}
  >
    <h2
      style={{
        textAlign: 'center',
        color: 'white',
        fontWeight: '100'
      }}
    >
      How do you feel about {block.name}?
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
