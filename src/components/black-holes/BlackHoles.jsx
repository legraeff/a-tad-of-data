import React, { Component } from 'react';
import './BlackHoles.css'; // Tell Webpack that BlackHoles.js uses these styles
import LineChart from '../line-chart/LineChart.jsx';
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
        <ul> First parameter
          <li onClick={() => this.changeFirstParam("distance")}>Distance</li>
          <li onClick={() => this.changeFirstParam("mass")}>Radius</li>
          <li onClick={() => this.changeFirstParam("orbitalPeriod")}>Mass</li>
        </ul>
        <ul> Second parameter
          <li onClick={() => this.changeSecondParam("distance")}>Distance</li>
          <li onClick={() => this.changeSecondParam("mass")}>Radius</li>
          <li onClick={() => this.changeSecondParam("orbitalPeriod")}>Mass</li>
        </ul>
        <LineChart data={this.state.blackHoles} param={[this.state.firstParam, this.state.secondParam]} size={[960,500]}  />
      </div>
   )
  }
}

export default BlackHoles
