import React, { Component } from 'react';
import './Background.css'; // Tell Webpack that Background.js uses these styles

class Background extends Component {
  constructor(props) {
    super();
    this.state = {
      picture: '',
      copyright: '',
      title: '',
    }
  }

  componentDidMount() {

      fetch('https://api.nasa.gov/planetary/apod?api_key=cZ2IbDQRAs29x89yVb3yFzXEVkNBKTdg7XyJQb9h')
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({
          copyright: data.copyright,
          title: data.title,
          picture: data.url,
        });
      });
  }

  render() {
    return(
      <div>
        <div className="Background" style={{backgroundImage: "url(" + this.state.picture + ")"}}>
          <h1> {this.state.title} </h1></div>
        <div className="BackgroundDescription"> this beautiful image is only here due to:
          <span> {this.state.copyright} </span> </div>
      </div>
   )
  }
}

export default Background
