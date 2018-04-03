import React, { Component } from 'react';
import './BarChart.css'; // Tell Webpack that BarChart.js uses these styles
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
// import { axisLeft } from 'd3-axis';
import { transition} from 'd3-transition';

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
    var attribute = this.props.attr;
    this.dataArray = this.props.data;
    this.dataArray = this.props.data.map(function(item) {
      if (isNaN(parseInt(item[attribute], 10))) {
        return undefined;
      }
      return {"name": item.name, [attribute]: parseInt(item[attribute], 10)};
    });
    this.dataArray = this.dataArray.filter(function(item) {
      return (item !== undefined);
    });
    this.dataArray.sort(function(a, b){
      return a[attribute] - b[attribute];
    });
    this.createBarChart();
  }

  createBarChart() {
    const node = this.node
    var attribute = this.props.attr;
    var sizeOfData = this.dataArray.length;
    var widthOfSvg = this.props.size[0];
    var padding = 30;
    widthOfSvg = widthOfSvg - padding * sizeOfData;
    var widthOfBar = widthOfSvg / sizeOfData;
    var yScale = scaleLinear()
        .domain([0, max(this.dataArray, function(d) { return d[attribute]; })])
        .range([0, this.props.size[1]])

    select(".bar-chart-container")
      .style("width", '100%')
      .select(this.parentNode)

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
       .transition().duration(750)
       .attr('y', d => this.props.size[1] - yScale(d[attribute]))
       .attr('height', d => yScale(d[attribute]))
       .attr('width', widthOfBar / 4);

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
        .style('fill', '#fff').style('font-size', '12px')
        .attr('x', (d,i) => (i * widthOfBar) + (i * padding))
        .attr('y', d => this.props.size[1])
        .transition().duration(750)
        .attr('height', d => yScale(d[attribute]))
        .attr('width', widthOfBar + padding)
        .text( function (d) { return d["name"] })

  }


    render() {
    return(
      <div className="bar-chart-container">
        <svg ref={node => this.node = node} width={this.props.size[0]} height={this.props.size[1]}> </svg>
      </div>
   )
  }
}

export default BarChart
