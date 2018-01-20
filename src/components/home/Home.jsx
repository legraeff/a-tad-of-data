import React, { Component } from 'react';
import './Home.css'; // Tell Webpack that Home.js uses these styles
import logo from '../../logo.png';

class Home extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {

  }

  render() {
    return(
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-header-pun">
          <h1> <span>a</span>tad</h1>
           <small> of </small>
          <h1> data </h1>
        </div>
      </header>
   )
  }
}

export default Home
