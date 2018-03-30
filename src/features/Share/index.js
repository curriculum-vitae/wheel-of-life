import React from 'react';

const createShareURL = ({ blocks } = {}) => {
  return window.location.href;
};

export default ({ blocks }) => (
  <div style={{ padding: '20px' }}>
    <input value={createShareURL()} onChange={() => {}} />
    <button>COPY</button>
    <br />
    <button>FaceBook</button>
    <br />
    <button>Twitter</button>
  </div>
);
