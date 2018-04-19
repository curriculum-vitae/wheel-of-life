import * as d3 from 'd3'

import { compose, lifecycle, setDisplayName, withProps } from 'recompose'

import { BLOCKS } from '../../utils/constants'
import { RefsStore } from '../../utils/refsUtils'
import { WheelChart } from './components/WheelChart'

const createChart = ({ refs, width = 500, height = 500, blocks }) => {
  const MAX_VALUE = 10

  const heightOfBar = height / 2 - 100

  const radius = width / 2
  const names = blocks.map(d => d.name)
  const countOfBlocks = names.length
  const theta = 2 * Math.PI / names.length

  const svg = d3
    .select(refs.svg)
    .append('svg')
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .attr('viewBox', `-${width / 2} -${width / 2} ${width} ${height}`)
    .classed('svg-content', true)
    .append('g')

  const scaleBar = d3
    .scaleLinear()
    .domain([0, MAX_VALUE])
    .range([0, heightOfBar])

  const scaleBarWithMinus = d3
    .scaleLinear()
    .domain([0, MAX_VALUE])
    .range([0, -heightOfBar])

  svg
    .selectAll('circle')
    .data(scaleBarWithMinus.ticks(10))
    .enter()
    .append('circle')
    .attr('r', whatItIs => scaleBar(whatItIs))
    .style('fill', 'none')
    .style('stroke', '#a7aaa9')
    .style('stroke-dasharray', '1,3')
    .style('stroke-width', '.5px')

  const arc = d3
    .arc()
    .startAngle((d, index) => index * 2 * Math.PI / countOfBlocks)
    .endAngle((d, index) => (index + 1) * 2 * Math.PI / countOfBlocks)
    .innerRadius(0)

  /*
    Arcs
  */
  svg
    .selectAll('path')
    .data(blocks)
    .enter()
    .append('path')
    .each(d => (d.outerRadius = 0))
    .style('fill', block => BLOCKS[block.id].color)
    .attr('d', arc)
    .transition()
    // .ease(d3.easeCubic)
    .duration(1)
    .delay((d, i) => i * 1)
    .attrTween('d', (d, index) => {
      const i = d3.interpolate(d.outerRadius, scaleBar(+d.value))
      return t => {
        d.outerRadius = i(t)
        return arc(d, index)
      }
    })

  svg
    .append('circle')
    .attr('r', heightOfBar)
    .classed('outer', true)
    .style('fill', 'none')
    .style('stroke', 'black')
    .style('stroke-width', '1.5px')

  svg
    .selectAll('line')
    .data(names)
    .enter()
    .append('line')
    .attr('y2', -heightOfBar - 20)
    .style('stroke', '#696969')
    .style('stroke-width', '.5px')
    .attr('transform', (d, i) => 'rotate(' + i * 360 / countOfBlocks + ')')

  const labelRadius = heightOfBar * 1.025

  /*
  Labels
  */
  const labels = svg.append('g').classed('labels', true)

  labels
    .append('def')
    .append('path')
    .attr('id', 'label-path')
    .attr(
      'd',
      `m0 ${-labelRadius} a${labelRadius} ${labelRadius} 0 1,1 -0.01 0`,
    )

  labels
    .selectAll('text')
    .data(blocks)
    .enter()
    .append('text')
    .style('text-anchor', 'middle')
    .style('font-weight', 'bold')
    .style('font-size', '9')
    .each(d => {
      d.outerRadius = 0
    })
    .style('fill', block => BLOCKS[block.id].color)
    .attr(
      'transform',
      (data, index) =>
        `translate(${radius * Math.cos(index * theta)}, ${radius *
          Math.sin(index * theta)})`,
    )
    .text(block => BLOCKS[block.id].name.toUpperCase())
}

export const Wheel = compose(
  withProps({
    refs: new RefsStore(),
  }),
  lifecycle({
    componentDidMount() {
      createChart(this.props)
    },
  }),
  setDisplayName('Wheel'),
)(WheelChart)
