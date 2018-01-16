import React, { Component } from 'react';
import './Button.css'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  constructor(props) {
    super();
    this.text = props.text;
  }
  render() {
    return <button className="Button"> {this.text} </button>;
  }
}

export default Button
