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
        <div><small> data collected from <a href="http://142.244.87.173/"> NASA </a></small></div>
        <div className="params-container">
          <ul> <small> Please choose your Y-Axis parameter </small>
            <li onClick={() => this.changeSecondParam("Mass (1024kg)")}> <a className={this.isSecondParam('Mass (1024kg)')}> Mass (1024kg) </a> </li>
            <li onClick={() => this.changeSecondParam("Diameter (km)")}> <a className={this.isSecondParam('Diameter (km)')}> Diameter (km) </a> </li>
            <li onClick={() => this.changeSecondParam("Density (kg/m3)")}> <a className={this.isSecondParam('Density (kg/m3)')}> Density (kg/m3) </a> </li>
            <li onClick={() => this.changeSecondParam("Gravity (m/s2)")}> <a className={this.isSecondParam("Gravity (m/s2)")}>Gravity (m/s2) </a> </li>
            <li onClick={() => this.changeSecondParam("Escape Velocity (km/s)")}> <a className={this.isSecondParam('Escape Velocity (km/s)')}>Escape Velocity (km/s) </a> </li>
            <li onClick={() => this.changeSecondParam("Rotation Period (hours)")}> <a className={this.isSecondParam('Rotation Period (hours)')}> Rotation Period (hours)</a> </li>
            <li onClick={() => this.changeSecondParam("Length of Day (hours)")}> <a className={this.isSecondParam('Length of Day (hours)')}> Length of Day (hours) </a> </li>
            <li onClick={() => this.changeSecondParam("Distance from Sun (106 km)")}> <a className={this.isSecondParam('Distance from Sun (106 km)')}> Distance from Sun (106 km) </a> </li>
            <li onClick={() => this.changeSecondParam("Perihelion (106 km)")}> <a className={this.isSecondParam('Perihelion (106 km)')}> Perihelion (106 km)</a> </li>
            <li onClick={() => this.changeSecondParam("Aphelion (106 km)")}> <a className={this.isSecondParam('Aphelion (106 km)')}> Aphelion (106 km) </a> </li>
            <li onClick={() => this.changeSecondParam("Orbital Period (days)")}> <a className={this.isSecondParam('Orbital Period (days)')}> Orbital Period (days) </a> </li>
            <li onClick={() => this.changeSecondParam("Orbital Velocity (km/s)")}> <a className={this.isSecondParam('Orbital Velocity (km/s)')}>Orbital Velocity (km/s)</a> </li>
            <li onClick={() => this.changeSecondParam("Orbital Inclination (degrees)")}> <a className={this.isSecondParam('Orbital Inclination (degrees)')}> Orbital Inclination (degrees) </a> </li>
            <li onClick={() => this.changeSecondParam("Orbital Eccentricity")}> <a className={this.isSecondParam('Orbital Eccentricity')}> Orbital Eccentricity </a> </li>
            <li onClick={() => this.changeSecondParam("Obliquity to Orbit (degrees)")}> <a className={this.isSecondParam('Obliquity to Orbit (degrees)')}>Obliquity to Orbit (degrees)</a> </li>
            <li onClick={() => this.changeSecondParam("Mean Temperature (C)")}> <a className={this.isSecondParam('Mean Temperature (C)')}> Mean Temperature (C) </a> </li>
            <li onClick={() => this.changeSecondParam("Number of Moons")}> <a className={this.isSecondParam('Number of Moons')}> Number of Moons </a> </li>
          </ul>
          <ul> <small> Please choose your X-Axis parameter </small>
          <li onClick={() => this.changeFirstParam("Mass (1024kg)")}> <a className={this.isFirstParam('Mass (1024kg)')}> Mass (1024kg) </a> </li>
          <li onClick={() => this.changeFirstParam("Diameter (km)")}> <a className={this.isFirstParam('Diameter (km)')}> Diameter (km) </a> </li>
          <li onClick={() => this.changeFirstParam("Density (kg/m3)")}> <a className={this.isFirstParam('Density (kg/m3)')}> Density (kg/m3) </a> </li>
          <li onClick={() => this.changeFirstParam("Gravity (m/s2)")}> <a className={this.isFirstParam("Gravity (m/s2)")}>Gravity (m/s2) </a> </li>
          <li onClick={() => this.changeFirstParam("Escape Velocity (km/s)")}> <a className={this.isFirstParam('Escape Velocity (km/s)')}>Escape Velocity (km/s) </a> </li>
          <li onClick={() => this.changeFirstParam("Rotation Period (hours)")}> <a className={this.isFirstParam('Rotation Period (hours)')}> Rotation Period (hours)</a> </li>
          <li onClick={() => this.changeFirstParam("Length of Day (hours)")}> <a className={this.isFirstParam('Length of Day (hours)')}> Length of Day (hours) </a> </li>
          <li onClick={() => this.changeFirstParam("Distance from Sun (106 km)")}> <a className={this.isFirstParam('Distance from Sun (106 km)')}> Distance from Sun (106 km) </a> </li>
          <li onClick={() => this.changeFirstParam("Perihelion (106 km)")}> <a className={this.isFirstParam('Perihelion (106 km)')}> Perihelion (106 km)</a> </li>
          <li onClick={() => this.changeFirstParam("Aphelion (106 km)")}> <a className={this.isFirstParam('Aphelion (106 km)')}> Aphelion (106 km) </a> </li>
          <li onClick={() => this.changeFirstParam("Orbital Period (days)")}> <a className={this.isFirstParam('Orbital Period (days)')}> Orbital Period (days) </a> </li>
          <li onClick={() => this.changeFirstParam("Orbital Velocity (km/s)")}> <a className={this.isFirstParam('Orbital Velocity (km/s)')}>Orbital Velocity (km/s)</a> </li>
          <li onClick={() => this.changeFirstParam("Orbital Inclination (degrees)")}> <a className={this.isFirstParam('Orbital Inclination (degrees)')}> Orbital Inclination (degrees) </a> </li>
          <li onClick={() => this.changeFirstParam("Orbital Eccentricity")}> <a className={this.isFirstParam('Orbital Eccentricity')}> Orbital Eccentricity </a> </li>
          <li onClick={() => this.changeFirstParam("Obliquity to Orbit (degrees)")}> <a className={this.isFirstParam('Obliquity to Orbit (degrees)')}>Obliquity to Orbit (degrees)</a> </li>
          <li onClick={() => this.changeFirstParam("Mean Temperature (C)")}> <a className={this.isFirstParam('Mean Temperature (C)')}> Mean Temperature (C) </a> </li>
          <li onClick={() => this.changeFirstParam("Number of Moons")}> <a className={this.isFirstParam('Number of Moons')}> Number of Moons </a> </li>
          </ul>
        </div>
        <ScatterPlot data={this.state.solarSystem} param={[this.state.firstParam, this.state.secondParam]} size={[700,500]}  />
      </div>
   )
  }
}

export default SolarSystem
