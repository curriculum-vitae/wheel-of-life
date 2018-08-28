import './wheelChart.css'

import React from 'react'

export const WheelChart = ({ refs }) => (
  <div
    ref={ref => refs.store('svg', ref)}
    id="container"
    className="svg-container"
  />
)
