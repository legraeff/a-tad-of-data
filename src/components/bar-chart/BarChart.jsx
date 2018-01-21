import React, { Component } from 'react';
import './BarChart.css'; // Tell Webpack that BarChart.js uses these styles
import { scaleLinear, scaleBand } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import { axisLeft } from 'd3-axis';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.dataArray = [];
    this.createBarChart = this.createBarChart.bind(this)
  }

  componentDidMount() {
    this.createBarChart();
  }

  componentDidUpdate() {
    this.dataArray = this.props.data;
    this.dataArray = this.props.data.map(function(item) {
      if (isNaN(parseInt(item['height']))) {
        return;
      }
      return {"name": item.name, "height": parseInt(item['height'])};
    });
    this.dataArray = this.dataArray.filter(function(item) {
      return (item !== undefined);
    });
    this.dataArray.sort(function(a, b){
      return a["height"] - b["height"];
    });
    this.createBarChart();
  }

  createBarChart() {
    const node = this.node
    var sizeOfData = this.dataArray.length;
    var widthOfSvg = this.props.size[0];
    var padding = 20;
    widthOfSvg = widthOfSvg - padding * sizeOfData;
    var widthOfBar = widthOfSvg / sizeOfData;

    var yScale = scaleLinear()
        .domain([0, max(this.dataArray, function(d) { return d["height"]; })])
        .range([0, this.props.size[1]])

    select(node)
       .selectAll('rect')
       .data(this.dataArray)
       .enter()
       .append('rect')

    select(node)
       .selectAll('rect')
       .data(this.dataArray)
       .exit()
       .remove()

    select(node)
       .selectAll('rect')
       .data(this.dataArray)
       .style('fill', '#884D52')
       .attr('x', (d,i) => (i * widthOfBar) + (i * padding))
       .attr('y', d => this.props.size[1] - yScale(d["height"]))
       .attr('height', d => yScale(d["height"]))
       .attr('width', widthOfBar)

    select(node)
        .selectAll('text')
        .data(this.dataArray)
        .enter()
        .append('text')

    select(node)
        .selectAll('text')
        .data(this.dataArray)
        .exit()
        .remove()

    select(node)
        .selectAll('text')
        .data(this.dataArray)
        .style('fill', '#fff')
        .attr('x', (d,i) => (i * widthOfBar) + (i * padding))
        .attr('y', d => this.props.size[1])
        .attr('height', d => yScale(d["height"]))
        .attr('width', widthOfBar + padding)
        .text( function (d) { return d["name"] })

  }


  render() {
    return(
      <svg ref={node => this.node = node} width={this.props.size[0]} height={this.props.size[1]}> </svg>
   )
  }
}

export default BarChart
