import * as d3 from 'd3'
import { compose, lifecycle, setDisplayName, withProps } from 'recompose'
import { RefsStore } from '../../utils/refsUtils'
import { WheelChart } from './components/WheelChart'

const updateChart = ({ refs, blocks }) => {
  const maxValue = 10

  const width = 960
  const height = 500
  const barHeight = height / 2 - 40

  const svg = d3
    .select(refs.svg)
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${width / 2},${height / 2})`)

  const barScale = d3
    .scaleLinear()
    .domain([0, maxValue])
    .range([0, barHeight])

  const keys = blocks.map(d => d.name)
  const numBars = keys.length

  const x = d3
    .scaleLinear()
    .domain([0, maxValue])
    .range([0, -barHeight])

  svg
    .selectAll('circle')
    .data(x.ticks(10))
    .enter()
    .append('circle')
    .attr('r', function(d) {
      return barScale(d)
    })
    .style('fill', 'none')
    .style('stroke', '#a7aaa9')
    .style('stroke-dasharray', '1,3')
    .style('stroke-width', '.5px')

  const arc = d3
    .arc()
    .startAngle((d, i) => i * 2 * Math.PI / numBars)
    .endAngle((d, i) => (i + 1) * 2 * Math.PI / numBars)
    .innerRadius(0)

  const segments = svg
    .selectAll('path')
    .data(blocks)
    .enter()
    .append('path')
    .each(d => {
      d.outerRadius = 0
    })
    .style('fill', d => d.color)
    .attr('d', arc)

  segments
    .transition()
    .ease(d3.easeCubic)
    .duration(800)
    .delay((d, i) => i * 100)
    .attrTween('d', (d, index) => {
      const i = d3.interpolate(d.outerRadius, barScale(+d.value))
      return t => {
        d.outerRadius = i(t)
        return arc(d, index)
      }
    })

  svg
    .append('circle')
    .attr('r', barHeight)
    .classed('outer', true)
    .style('fill', 'none')
    .style('stroke', 'black')
    .style('stroke-width', '1.5px')

  svg
    .selectAll('line')
    .data(keys)
    .enter()
    .append('line')
    .attr('y2', -barHeight - 20)
    .style('stroke', '#696969')
    .style('stroke-width', '.5px')
    .attr('transform', (d, i) => 'rotate(' + i * 360 / numBars + ')')

  const labelRadius = barHeight * 1.025

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
    .data(keys)
    .enter()
    .append('text')
    .style('text-anchor', 'middle')
    .style('font-weight', 'bold')
    .style('font-size', '9')
    .style('fill', () => '#3e3e3e')
    .append('textPath')
    .attr('xlink:href', '#label-path')
    .attr('startOffset', (d, i) => i * 100 / numBars + 50 / numBars + '%')
    .text(test => test.toUpperCase())
}

export const Wheel = compose(
  withProps({
    refs: new RefsStore(),
  }),
  lifecycle({
    componentDidMount() {
      updateChart(this.props)
    },
    componentDidUpdate() {
      updateChart(this.props)
    },
  }),
  setDisplayName('Wheel'),
)(WheelChart)
