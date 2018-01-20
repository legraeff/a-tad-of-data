import React, { Component } from 'react';
import './Header.css'; // Tell Webpack that Header.js uses these styles
import logo from '../../logo.png';

class Header extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <nav className="navbar">
        <a className="nav-logo nav-item" href="/home"><img src={logo} alt="logo" /></a>
        <ul className="nav">
          <li className="nav-item"><a href="/photo-of-the-day">Pic of the day</a></li>
          <li className="nav-item"><a href="/star-wars">Star Wars</a></li>
        </ul>
      </nav>
    )
  }
}

export default Header
