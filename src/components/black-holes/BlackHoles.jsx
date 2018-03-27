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
    if (this.state.secondParam === name) {
      return
    }
    this.setState({"firstParam": name});
  }

  changeSecondParam(name) {
    if (this.state.firstParam === name) {
      return
    }
    this.setState({"secondParam": name});
  }

  isFirstParam(name) {
    if (this.state.firstParam === name) {
      return 'active';
    }
  }

  isSecondParam(name) {
    if (this.state.secondParam === name) {
      return 'active';
    }
  }


  render() {
    return(
      <div>
        <div><small> data collected from <a href="http://142.244.87.173/"> WATCHDOG </a> University of Alberta </small></div>
        <div className="params-container">
          <ul> <small> Please choose your Y-Axis parameter </small>
            <li onClick={() => this.changeSecondParam("distance")}> <a className={this.isSecondParam('distance')}> Distance(kpc) </a> </li>
            <li onClick={() => this.changeSecondParam("orbitalPeriod")}> <a className={this.isSecondParam('orbitalPeriod')}> Orbital Period (hours) </a> </li>
            <li onClick={() => this.changeSecondParam("mass")}> <a className={this.isSecondParam('mass')}> Mass (solar mass)</a> </li>
          </ul>
          <ul> <small> Please choose your X-Axis parameter </small>
            <li onClick={() => this.changeFirstParam("distance")}> <a className={this.isFirstParam('distance')}> Distance(kpc) </a> </li>
            <li onClick={() => this.changeFirstParam("orbitalPeriod")}> <a className={this.isFirstParam('orbitalPeriod')}> Orbital Period (hours) </a> </li>
            <li onClick={() => this.changeFirstParam("mass")}> <a className={this.isFirstParam('mass')}> Mass (solar mass)</a> </li>
          </ul>
        </div>
        <ScatterPlot data={this.state.blackHoles} param={[this.state.firstParam, this.state.secondParam]} size={[700,500]}  />
      </div>
   )
  }
}

export default BlackHoles
