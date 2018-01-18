import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Button from './components/button/Button.jsx';
import Background from './components/background/Background.jsx';

class App extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-header-pun">
            <h1> <span>a</span>tad</h1>
             <small> of </small>
            <h1> data </h1>
          </div>
        </header>
        <Background> </Background>



      </div>
    );
  }
}

export default App;
