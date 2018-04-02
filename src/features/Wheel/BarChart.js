import * as d3 from 'd3'
import React, { Component } from 'react'

export default class BarChart extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.createBarChart()
  }

  componentDidUpdate() {
    this.createBarChart()
  }

  createBarChart = () => {
    const data = this.props.data

    const width = 960
    const height = 500
    const barHeight = height / 2 - 40

    const svg = d3.select(this.node)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

    const extent = d3.extent(data, d => d.value)
    const barScale = d3.scaleLinear()
      .domain(extent)
      .range([0, barHeight])

    const keys = data.map(d => d.name)
    const numBars = keys.length

    const x = d3.scaleLinear()
      .domain(extent)
      .range([0, -barHeight])

    const xAxis = d3.axisLeft()
      .scale(x)
      .ticks(10)

    svg.selectAll("circle")
      .data(x.ticks(3))
      .enter().append("circle")
      .attr("r", function (d) {
        return barScale(d);
      })
      .style("fill", "none")
      .style("stroke", "black")
      .style("stroke-dasharray", "2,2")
      .style("stroke-width", ".5px")

    const arc = d3.arc()
      .startAngle((d, i) => (i * 2 * Math.PI) / numBars)
      .endAngle((d, i) => ((i + 1) * 2 * Math.PI) / numBars)
      .innerRadius(0)

    const segments = svg.selectAll("path")
      .data(data)
      .enter().append("path")
      .each(d => {
        d.outerRadius = 0;
      })
      .style("fill", d => d.color)
      .attr("d", arc)

    segments.transition().ease(d3.easeElastic).duration(1000).delay((d, i) => i * 100)
      .attrTween("d", (d, index) => {
        const i = d3.interpolate(d.outerRadius, barScale(+d.value));
        return t => {
          d.outerRadius = i(t);
          return arc(d, index);
        };
      });

    svg.append("circle")
      .attr("r", barHeight)
      .classed("outer", true)
      .style("fill", "none")
      .style("stroke", "black")
      .style("stroke-width", "1.5px");

    svg.selectAll("line")
      .data(keys)
      .enter().append("line")
      .attr("y2", -barHeight - 20)
      .style("stroke", "black")
      .style("stroke-width", ".5px")
      .attr("transform", (d, i) => "rotate(" + (i * 360 / numBars) + ")")

    svg.append("g")
      .attr("class", "x axis")
      .call(xAxis);

    const labelRadius = barHeight * 1.025

    const labels = svg.append("g")
      .classed("labels", true)

    labels.append("def")
      .append("path")
      .attr("id", "label-path")
      .attr("d", "m0 " + -labelRadius + " a" + labelRadius + " " + labelRadius + " 0 1,1 -0.01 0");

    labels.selectAll("text")
      .data(keys)
      .enter().append("text")
      .style("text-anchor", "middle")
      .style("font-weight", "bold")
      .style("fill", function (d, i) {
        return "#3e3e3e";
      })
      .append("textPath")
      .attr("xlink:href", "#label-path")
      .attr("startOffset", (d, i) => i * 100 / numBars + 50 / numBars + '%')
      .text(d => d.toUpperCase());
  }

  render() {
    return <svg ref={node => this.node = node} />
  }
}
