import React from 'react';

export default ({ blocks, index }) => (
  <div style={{ textAlign: 'center', color: 'white' }}>
    {Math.floor(100 * index / blocks.length)}% done
  </div>
);
