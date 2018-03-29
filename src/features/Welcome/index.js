import { Link } from 'react-router-dom';
import React from 'react';

export default () => (
  <div>
    <h1>Well hello</h1>

    <h3>Whant to balance your life?</h3>
    <Link to={'/quiz'}>
      <button>Start</button>
    </Link>
  </div>
);
