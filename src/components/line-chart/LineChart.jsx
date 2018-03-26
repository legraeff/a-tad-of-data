import React, { Component } from 'react';
import './LineChart.css'; // Tell Webpack that LineChart.js uses these styles
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import { selectAll } from 'd3-selection';
import { on } from 'd3-selection';
import { axisLeft } from 'd3-axis';
import { axisBottom } from 'd3-axis';
import { transition } from 'd3-transition';
import { extent } from 'd3-array';
import { json } from 'd3-request';

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.createLineChart = this.createLineChart.bind(this)
  }

  componentDidMount() {
    this.createLineChart();
  }

  componentDidUpdate() {
    this.createLineChart();
  }

  createLineChart() {
    const node = this.node
    var param = this.props.param;
    if (!this.props.param[0] || !this.props.param[1]) {
      console.log("not enough data")
      return
    }
    var widthOfSvg = this.props.size[0];
    var heightOfSvg = this.props.size[1];
    var margin = {top: 20, right: 20, bottom: 30, left: 50};
    widthOfSvg = widthOfSvg - margin.left;
    heightOfSvg = heightOfSvg - margin.top;
    var dataSet = this.props.data;

    var xScale = scaleLinear()
        .range([0, widthOfSvg])
        .domain(extent(dataSet, function(d) { return d[param[0]]; }));

    var yScale = scaleLinear()
        .rangeRound([heightOfSvg, 0])
        .domain(extent(dataSet, function(d) { return d[param[1]]; }));


    select(node)
       .selectAll('circle')
       .data(dataSet)
       .enter()
       .append('circle')

    select(node)
       .selectAll('circle')
       .data(dataSet)
       .exit()
       .remove()

    select(node)
       .selectAll('circle')
       .data(dataSet)
       .attr('cx', d => xScale(d[param[0]]) + margin.left)
       .attr('cy', d => yScale(d[param[1]]) - margin.top)
       .attr('r', 5)
       .style('fill', '#fff')
       .on("click", function(){
         selectAll("circle").attr("r", 5);
         select(this).attr("r", 10);
         alert(select(this).data()[0].name);
       })

      select(node)
        .selectAll("g")
        .remove()

     select(node)
       .append("g")
         .attr("transform", "translate(30," + (heightOfSvg - 10) + ")")
         .call(axisBottom(xScale))
         .attr("class", "whiteAxis")
       .append("text")
         .attr("fill", "#000")
         .attr("x", widthOfSvg)
         .attr("dy", "-10")
         .attr("text-anchor", "end")
         .text(this.props.param[0]);
     select(node)
       .append("g")
        .attr("transform", "translate(" + (margin.left) + ",0)")
         .call(axisLeft(yScale))
         .attr("class", "whiteAxis")
       .append("text")
         .attr("fill", "#000")
         .attr("transform", "rotate(-90)")
         .attr("y", 6)
         .attr("dy", "0.71em")
         .attr("text-anchor", "end")
         .text(this.props.param[1]);



  }


    render() {
    return(
      <div className="chart-container">
        <svg ref={node => this.node = node} width={this.props.size[0]} height={this.props.size[1]}> </svg>
      </div>
   )
  }
}

export default LineChart
