import React from 'react'
import './wheelChart.css'

export const WheelChart = ({ refs }) => (
  <div ref={ref => refs.store('svg', ref)} id="container" className="svg-container">
  </div>
)
