import React, { Component } from 'react';
import './StarWars.css'; // Tell Webpack that StarWars.js uses these styles
import BarChart from '../bar-chart/BarChart.jsx';

class StarWars extends Component {
  constructor(props) {
    super();
    this.state = {
      planets: [],
      people: [],
      barData: [1, 2, 3],
    }
    this.planets = [];
    this.people = [];
  }

  componentDidMount() {
    this.getData('https://swapi.co/api/planets/', 'planets', this.planets);
    this.getData('https://swapi.co/api/people/', 'people', this.people);
  }

  getData(url, key, array) {
    fetch(url)
    .then(results => {
      return results.json();
    }).then(data => {
      array = array.concat(data.results);
      if (data.next) {
        this.getData(data.next, key, array);
      }
      else {
        var obj = {};
        obj[key] = array;
        this.setState(obj);
      }
    });
  }

  render() {
    return(
      <div>
        <BarChart data={this.state.people} size={[7500,500]} />
      </div>
   )
  }
}

export default StarWars
