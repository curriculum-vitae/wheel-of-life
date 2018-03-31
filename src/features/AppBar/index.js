import { Link } from 'react-router-dom'
import React from 'react'

export default () => (
  <div
    style={{
      height: '64px',
      padding: '12px 20px',
    }}>
    <Link to={'/'}>
      <h1
        style={{
          margin: '0px',

          color: 'white',
        }}>
        Wheel of Life
      </h1>
    </Link>
  </div>
)
