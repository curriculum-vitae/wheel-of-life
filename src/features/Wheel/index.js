import * as d3 from 'd3'

import { compose, lifecycle, setDisplayName, withProps } from 'recompose'

import { BLOCKS } from '../../utils/constants'
import { RefsStore } from '../../utils/refsUtils'
import { WheelChart } from './components/WheelChart'

const createChart = ({ refs, width = 500, height = 500, blocks }) => {
  const MAX_VALUE = 10

  const CIRCLES_SPACE = 0.8
  const radiusOfCircle = CIRCLES_SPACE * width / 2
  const radiusOfLabels = CIRCLES_SPACE * width / 2

  const countOfBlocks = blocks.length

  const getAngleArcStart = index => 2 * Math.PI * index / countOfBlocks
  const getAngleArcEnd = index => 2 * Math.PI * (index + 1) / countOfBlocks

  const getThetaLabel = index =>
    (getAngleArcStart(index) + getAngleArcEnd(index)) / 2 - Math.PI / 2

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
    .range([0, radiusOfCircle])

  svg
    .selectAll('circle')
    .data(scaleBar.ticks(10))
    .enter()
    .append('circle')
    .attr('r', whatItIs => scaleBar(whatItIs))
    .style('fill', 'none')
    .style('stroke', '#a7aaa9')
    .style('stroke-dasharray', '1,3')
    .style('stroke-width', '.5px')

  const arc = d3
    .arc()
    .startAngle((block, index) => getAngleArcStart(index))
    .endAngle((block, index) => getAngleArcEnd(index))
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
    /*
    .ease(d3.easeCubic)
    .duration(1)    
    .delay((d, i) => i * 1)
    */
    .attrTween('d', (block, index) => {
      console.log('attr Ween block value in arcs')
      console.log(block)
      console.log(block.value)
      const otherFunctionWTF = d3.interpolate(
        block.outerRadius,
        scaleBar(block.value),
      )
      return someFunctionWTF => {
        block.outerRadius = otherFunctionWTF(someFunctionWTF)
        return arc(block, index)
      }
    })

  svg
    .append('circle')
    .attr('r', radiusOfCircle)
    .classed('outer', true)
    .style('fill', 'none')
    .style('stroke', 'black')
    .style('stroke-width', '1.5px')

  svg
    .selectAll('line')
    .data(blocks)
    .enter()
    .append('line')
    .attr('y2', -radiusOfCircle)
    .style('stroke', '#696969')
    .style('stroke-width', '.5px')
    .attr('transform', (block, i) => 'rotate(' + i * 360 / countOfBlocks + ')')

  const labels = svg.append('g').classed('labels', true)

  /*
  Adding labels
  */
  labels
    .selectAll('text')
    .data(blocks)
    .enter()
    .append('text')
    .style('text-anchor', 'middle')
    .style('font-weight', 'bold')
    .style('font-size', '12')
    .style('fill', block => BLOCKS[block.id].color)
    .attr('transform', (block, index) => {
      const angle = getThetaLabel(index)
      const xCoord = radiusOfLabels * Math.cos(angle)
      const yCoord = radiusOfLabels * Math.sin(angle)

      return `translate(${xCoord}, ${yCoord})`
    })
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
