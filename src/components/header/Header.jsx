import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
        <div className="nav">
          <Link to="/black-holes" className="nav-item">Black holes</Link>
          <Link to="/solar-system" className="nav-item"> Solar System</Link>
          {/* <Link to="/star-wars" className="nav-item">Star Wars</Link> */}
          <Link to="/photo-of-the-day" className="nav-item">Photo of the day</Link>
        </div>
      </nav>
    )
  }
}

export default Header
