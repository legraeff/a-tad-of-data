import React, { Component } from 'react';
import './Atmospheres.css'; // Tell Webpack that Atmospheres.js uses these styles
import PieChart from '../pie-chart/PieChart.jsx';
import atmospheresInfo from './atmospheresInfo.json';


class Atmospheres extends Component {
  constructor(props) {
    super();
    this.state = {
      atmospheresInfo: atmospheresInfo,
      param: '',
      chosenData: null,
    }
    this.changeParam = this.changeParam.bind(this);
  }

  componentDidMount() {
  }

  changeParam(name) {
    this.setState({"param": name});
    var dataset = this.state.atmospheresInfo.find( data => data["Name"] === name );
    this.setState({"chosenData": dataset["Values"]});
  }

  isParam(name) {
    if (this.state.param === name) {
      return 'active';
    }
  }



  render() {
    return(
      <div>
        <div className="params-container">
          <ul>
            <div> <small> Please choose your parameters: </small></div>
            <li onClick={() => this.changeParam("Sun")}> <a className={this.isParam('Sun')}> Sun </a> </li>
            <li onClick={() => this.changeParam("Mercury")}> <a className={this.isParam('Mercury')}> Mercury </a> </li>
            <li onClick={() => this.changeParam("Venus")}> <a className={this.isParam('Venus')}> Venus </a> </li>
            <li onClick={() => this.changeParam("Earth")}> <a className={this.isParam("Earth")}> Earth </a> </li>
            <li onClick={() => this.changeParam("Moon")}> <a className={this.isParam('Moon')}> Moon </a> </li>
            <li onClick={() => this.changeParam("Mars")}> <a className={this.isParam('Mars')}> Mars </a> </li>
            <li onClick={() => this.changeParam("Jupiter")}> <a className={this.isParam('Jupiter')}> Jupiter </a> </li>
            <li onClick={() => this.changeParam("Saturn")}> <a className={this.isParam("Saturn")}> Saturn </a> </li>
            <li onClick={() => this.changeParam("Titan")}> <a className={this.isParam('Titan')}> Titan </a> </li>
            <li onClick={() => this.changeParam("Uranus")}> <a className={this.isParam('Uranus')}> Uranus </a> </li>
            <li onClick={() => this.changeParam("Neptune")}> <a className={this.isParam('Neptune')}> Neptune </a> </li>
            <li onClick={() => this.changeParam("Pluto")}> <a className={this.isParam("Pluto")}> Pluto </a> </li>
          </ul>

        </div>
        <PieChart data={this.state.chosenData} size={[500,500]}  />
      </div>
   )
  }
}

export default Atmospheres
