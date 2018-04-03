import React from 'react'

export const WheelChart = ({ refs }) => (
  <svg ref={ref => refs.store('svg', ref)} />
)
