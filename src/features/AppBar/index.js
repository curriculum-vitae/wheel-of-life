import { Link } from 'react-router-dom'
import React from 'react'
import { grey } from 'utils/colors'
export default ({ color = 'white' }) => (
  <div
    style={{
      height: '64px',
      padding: '12px 20px',
      borderBottom: `1px solid rgba(255, 255, 255, .35)`,
    }}>
    <Link to={'/'}>
      <h2
        style={{
          margin: '6px',
          color,
        }}>
        Wheel of Life
      </h2>
    </Link>
  </div>
)
