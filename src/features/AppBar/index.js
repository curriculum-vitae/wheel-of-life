import { Link } from 'react-router-dom'
import React from 'react'

export default ({ color = 'white' }) => (
  <div
    style={{
      height: '64px',
      padding: '12px 20px',
      borderBottom: '1px solid grey',
    }}>
    <Link to={'/'}>
      <h1
        style={{
          margin: '0px',
          color,
        }}>
        Wheel of Life
      </h1>
    </Link>
  </div>
)
