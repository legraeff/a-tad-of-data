import React, { Component } from 'react';
import './PieChart.css'; // Tell Webpack that PieChart.js uses these styles
import { scaleOrdinal } from 'd3-scale';
import { select, selectAll } from 'd3-selection';
import { pie, arc } from 'd3-shape';

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.createPieChart = this.createPieChart.bind(this)
  }

  componentDidMount() {
    this.createPieChart();
  }

  componentDidUpdate() {
    this.createPieChart();
  }

  createPieChart() {
    const node = this.node
    var data = this.props.data;
    var widthOfSvg = this.props.size[0];
    var heightOfSvg = this.props.size[1];
    if (!data) {
      console.log("Missing param")
      return
    }
    var radius = Math.min(widthOfSvg, heightOfSvg) / 2;

    var color = scaleOrdinal(["#5DA5DA", "#FAA43A", "#60BD68", "#F17CB0", "#B2912F", "#B276B2", "#DECF3F", "#F15854"]);

    var nameProp = Object.keys(data[0])[0];
    var valueProp = Object.keys(data[0])[1];

    var pieShape = pie()
      .sort(null)
      .value(d => d[valueProp]);

    var path = arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

    var label = arc()
      .outerRadius(radius - 40)
      .innerRadius(radius - 40);

    select(node)
       .selectAll('path')
       .data(pieShape(data))
       .enter()
       .append('path')

    select(node)
       .selectAll('path')
       .data(pieShape(data))
       .exit()
       .remove()

    select(node)
       .selectAll('path')
       .data(pieShape(data))
       .attr("d", path)
       .attr("transform", "translate(" + widthOfSvg / 2 + "," + heightOfSvg / 2 + ")")
       .attr("fill", d => color(d.data[nameProp]));

     select(node)
        .selectAll('text')
        .data(pieShape(data))
        .enter()
        .append('text')

     select(node)
        .selectAll('text')
        .data(pieShape(data))
        .exit()
        .remove()

     select(node)
        .selectAll('text')
        .data(pieShape(data))
        .text(d => d.data[nameProp] + ", " + d.data[valueProp])
        .attr("transform", function(d) {
          let coordinates = label.centroid(d);
          let translateX = widthOfSvg / 2 + coordinates[0]
          let translateY = heightOfSvg / 2 + coordinates[1]
          return "translate(" + translateX + "," + translateY + ")";
        })
        .attr("fill", "white");

  }

    render() {
    return(
      <svg ref={node => this.node = node} width={this.props.size[0]} height={this.props.size[1]}> </svg>
   )
  }
}

export default PieChart
