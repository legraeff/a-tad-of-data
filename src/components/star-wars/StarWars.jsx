import React, { Component } from 'react';
import './StarWars.css'; // Tell Webpack that StarWars.js uses these styles

class StarWars extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {

  }

  render() {
    return(
      <div>
        <h1> Some Star Wars cool stuff to come! :) </h1>
      </div>
   )
  }
}

export default StarWars
