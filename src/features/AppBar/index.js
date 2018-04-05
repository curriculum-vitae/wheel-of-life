import { Link } from 'react-router-dom'
import React from 'react'
import { grey } from 'utils/colors'
export default ({ color = 'white' }) => (
  <div
    style={{
      height: '54px',
      padding: '10px 14px',
      borderBottom: `1px solid rgba(255, 255, 255, .35)`,
    }}>
    <Link to={'/'}>
      <h3
        style={{
          margin: '6px',
          opacity: '0.9',
          color,
        }}>
        Wheel of Life
      </h3>
    </Link>
  </div>
)
