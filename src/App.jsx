import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Button from './components/button/Button.jsx';
import Background from './components/background/Background.jsx';
import Listing from './components/listing/Listing.jsx';

class App extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div class="App-header-pun">
            <h1> <span>a</span>tad</h1>
             <small> of </small>
            <h1> data </h1>
          </div>
        </header>
        <Background> </Background>
        <p className="App-intro">
        </p>
        <Listing> </Listing>



      </div>
    );
  }
}

export default App;
