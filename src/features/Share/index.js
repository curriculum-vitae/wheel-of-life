import React from 'react';
import copy from 'copy-to-clipboard';

const createShareURL = ({ blocks } = {}) => {
  return window.location.href;
};

const runCopy = () => {
  copy(createShareURL());
  window.alert('Link was copied to clipbard!');
};

export default ({ blocks }) => (
  <div style={{ padding: '20px' }}>
    <input onClick={() => runCopy()} value={createShareURL()} onChange={() => {}} />
    <button onClick={() => runCopy()}>COPY</button>
    <br />
    <button>FaceBook</button>
    <br />
    <button>Twitter</button>
  </div>
);
