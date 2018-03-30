import React, { Component } from 'react';
import './SolarSystem.css'; // Tell Webpack that SolarSystem.js uses these styles
import ScatterPlot from '../scatter-plot/ScatterPlot.jsx';
import solarSystemData from './solarsysteminfo.json';


class SolarSystem extends Component {
  constructor(props) {
    super();
    this.state = {
      solarSystem: solarSystemData,
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
        <div><small> data collected from <a href="http://142.244.87.173/"> NASA </a></small></div>
        <div className="params-container">
          <ul>
            <div> <small> Please choose your parameters: </small></div>
            <li onClick={() => this.changeParam("Mass (1024kg)")}> <a className={this.isParam('Mass (1024kg)')}> Mass (1024kg) </a> </li>
            <li onClick={() => this.changeParam("Diameter (km)")}> <a className={this.isParam('Diameter (km)')}> Diameter (km) </a> </li>
            <li onClick={() => this.changeParam("Density (kg/m3)")}> <a className={this.isParam('Density (kg/m3)')}> Density (kg/m3) </a> </li>
            <li onClick={() => this.changeParam("Gravity (m/s2)")}> <a className={this.isParam("Gravity (m/s2)")}>Gravity (m/s2) </a> </li>
            <li onClick={() => this.changeParam("Escape Velocity (km/s)")}> <a className={this.isParam('Escape Velocity (km/s)')}>Escape Velocity (km/s) </a> </li>
            <li onClick={() => this.changeParam("Rotation Period (hours)")}> <a className={this.isParam('Rotation Period (hours)')}> Rotation Period (hours)</a> </li>
            <li onClick={() => this.changeParam("Length of Day (hours)")}> <a className={this.isParam('Length of Day (hours)')}> Length of Day (hours) </a> </li>
            <li onClick={() => this.changeParam("Distance from Sun (106 km)")}> <a className={this.isParam('Distance from Sun (106 km)')}> Distance from Sun (106 km) </a> </li>
            <li onClick={() => this.changeParam("Perihelion (106 km)")}> <a className={this.isParam('Perihelion (106 km)')}> Perihelion (106 km)</a> </li>
            <li onClick={() => this.changeParam("Aphelion (106 km)")}> <a className={this.isParam('Aphelion (106 km)')}> Aphelion (106 km) </a> </li>
            <li onClick={() => this.changeParam("Orbital Period (days)")}> <a className={this.isParam('Orbital Period (days)')}> Orbital Period (days) </a> </li>
            <li onClick={() => this.changeParam("Orbital Velocity (km/s)")}> <a className={this.isParam('Orbital Velocity (km/s)')}>Orbital Velocity (km/s)</a> </li>
            <li onClick={() => this.changeParam("Orbital Inclination (degrees)")}> <a className={this.isParam('Orbital Inclination (degrees)')}> Orbital Inclination (degrees) </a> </li>
            <li onClick={() => this.changeParam("Orbital Eccentricity")}> <a className={this.isParam('Orbital Eccentricity')}> Orbital Eccentricity </a> </li>
            <li onClick={() => this.changeParam("Obliquity to Orbit (degrees)")}> <a className={this.isParam('Obliquity to Orbit (degrees)')}>Obliquity to Orbit (degrees)</a> </li>
            <li onClick={() => this.changeParam("Mean Temperature (C)")}> <a className={this.isParam('Mean Temperature (C)')}> Mean Temperature (C) </a> </li>
            <li onClick={() => this.changeParam("Number of Moons")}> <a className={this.isParam('Number of Moons')}> Number of Moons </a> </li>
          </ul>

        </div>
        <ScatterPlot data={this.state.solarSystem} param={[this.state.firstParam, this.state.secondParam]} size={[700,500]}  />
      </div>
   )
  }
}

export default SolarSystem
