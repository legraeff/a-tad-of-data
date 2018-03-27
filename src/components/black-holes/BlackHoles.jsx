import React, { Component } from 'react';
import './BlackHoles.css'; // Tell Webpack that BlackHoles.js uses these styles
import ScatterPlot from '../scatter-plot/ScatterPlot.jsx';
import blackHoleData from './blackholeinfo.json';


class BlackHoles extends Component {
  constructor(props) {
    super();
    this.state = {
      blackHoles: blackHoleData,
      firstParam: '',
      secondParam: '',
    }
    this.changeFirstParam = this.changeFirstParam.bind(this);
    this.changeSecondParam = this.changeSecondParam.bind(this);

  }

  componentDidMount() {
  }

  changeFirstParam(name) {
    this.setState({"firstParam": name});
  }
  changeSecondParam(name) {
    this.setState({"secondParam": name});
  }

  render() {
    return(
      <div>
        <div><small> data collected from <a href="http://142.244.87.173/"> WATCHDOG </a> University of Alberta </small></div>
        <div className="params-container">
          <ul> <small> Please choose your X-Axis parameter </small>
            <li onClick={() => this.changeFirstParam("distance")}> <a> Distance(kpc) </a> </li>
            <li onClick={() => this.changeFirstParam("orbitalPeriod")}> <a> Orbital Period (hours) </a> </li>
            <li onClick={() => this.changeFirstParam("mass")}> <a> Mass (solar mass )</a> </li>
          </ul>
          <ul> <small> Please choose your Y-Axis parameter </small>
            <li onClick={() => this.changeSecondParam("distance")}> <a> Distance(kpc) </a> </li>
            <li onClick={() => this.changeSecondParam("orbitalPeriod")}> <a> Orbital Period (hours) </a> </li>
            <li onClick={() => this.changeSecondParam("mass")}> <a> Mass (solar mass )</a> </li>
          </ul>
        </div>
        <ScatterPlot data={this.state.blackHoles} param={[this.state.firstParam, this.state.secondParam]} size={[700,500]}  />
      </div>
   )
  }
}

export default BlackHoles
