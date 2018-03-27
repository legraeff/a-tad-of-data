import React, { Component } from 'react';
import './ScatterPlot.css'; // Tell Webpack that ScatterPlot.js uses these styles
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

class ScatterPlot extends Component {
  constructor(props) {
    super(props);
    this.createScatterPlot = this.createScatterPlot.bind(this)
  }

  componentDidMount() {
    this.createScatterPlot();
  }

  componentDidUpdate() {
    this.createScatterPlot();
  }

  createScatterPlot() {
    const node = this.node
    var param = this.props.param;
    if (!this.props.param[0] || !this.props.param[1]) {
      console.log("Missing axis attr")
      return
    }
    var widthOfSvg = this.props.size[0];
    var heightOfSvg = this.props.size[1];
    var margin = {top: 30, right: 30, bottom: 30, left: 30};
    var dataSet = this.props.data;

    var xScale = scaleLinear()
        .range([0, widthOfSvg - margin.left - margin.right])
        .domain(extent(dataSet, d => d[param[0]]));

    var yScale = scaleLinear()
        .rangeRound([heightOfSvg - margin.bottom, margin.top])
        .domain(extent(dataSet, d => d[param[1]]));

    select(".chart-container div")
      .style("visibility", "visible")
      
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
       .attr('cy', d => yScale(d[param[1]]))
       .attr('r', 5)
       .on("click", function(){
         selectAll("circle").attr("r", 5).attr("class", "");
         select(this).attr("r", 10).attr("class", "active-circle");
         selectAll(".chart-container div p")
          .remove()
         var selectedData = select(this).data()[0];
         for (var key in selectedData) {
           select(".chart-container div")
            .append('p')
            .text(key + ": " + selectedData[key])
        };
      });

      select(node)
        .selectAll("g")
        .remove()

     select(node)
       .append("g")
         .attr("transform", "translate(" + margin.left + "," + (heightOfSvg - margin.left) + ")")
         .call(axisBottom(xScale))
         .attr("class", "whiteAxis")
       .append("text")
         .attr("fill", "#000")
         .attr("x", widthOfSvg - margin.right * 2)
         .attr("dy", "-10")
         .attr("text-anchor", "end")
         .text(this.props.param[0]);
     select(node)
       .append("g")
        .attr("transform", "translate(" + (margin.bottom) + ",0)")
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
        <div className="selected-data-info">
          <small> Select a circle to see more information </small>
        </div>
      </div>
   )
  }
}

export default ScatterPlot
