import { Link } from 'react-router-dom';
import React from 'react';

export default () => (
  <div>
    <h1 style={{ textAlign: 'center', fontSize: '60px' }}>Well hello</h1>

    <h3 style={{ textAlign: 'center' }}>Whant to balance your life?</h3>
    <div style={{ textAlign: 'center' }}>
      <Link to={'/quiz'}>
        <button style={{ cursor: 'pointer' }}>Start</button>
      </Link>
    </div>
  </div>
);
