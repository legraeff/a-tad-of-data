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
    this.changeParam = this.changeParam.bind(this);

  }

  componentDidMount() {
  }

  changeParam(name) {
    if (this.state.secondParam === name || this.state.firstParam === name) {
      return
    }
    else if (this.state.firstParam && this.state.secondParam) {
      this.setState({"firstParam": name});
      return this.setState({"secondParam": undefined});
    }
    else if (this.state.firstParam) {
      return this.setState({"secondParam": name});
    }
    this.setState({"firstParam": name});
  }

  isParam(name) {
    if (this.state.firstParam === name || this.state.secondParam === name) {
      return 'active';
    }
  }




  render() {
    return(
      <div>
        <div><small> data collected from <a href="http://142.244.87.173/"> WATCHDOG </a> University of Alberta </small></div>
        <div className="params-container">
          <ul>
            <div> <small> Please choose your parameters: </small></div>
            <li onClick={() => this.changeParam("distance")}> <a className={this.isParam('distance')}> Distance(kpc) </a> </li>
            <li onClick={() => this.changeParam("orbitalPeriod")}> <a className={this.isParam('orbitalPeriod')}> Orbital Period (hours) </a> </li>
            <li onClick={() => this.changeParam("mass")}> <a className={this.isParam('mass')}> Mass (solar mass)</a> </li>
          </ul>
        </div>
        <ScatterPlot data={this.state.blackHoles} param={[this.state.firstParam, this.state.secondParam]} size={[700,500]}  />
      </div>
   )
  }
}

export default BlackHoles
