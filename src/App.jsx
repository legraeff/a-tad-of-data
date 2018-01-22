import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Content from './components/content/Content.jsx';

class App extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="App">
        <Header> </Header>
        <Content> </Content>

      </div>
    );
  }
}

export default App;
