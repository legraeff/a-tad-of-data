import React, { Component } from 'react';
import './NasaPic.css'; // Tell Webpack that NasaPic.js uses these styles

class NasaPic extends Component {
  constructor(props) {
    super();
    this.state = {
      picture: '',
      copyright: '',
      title: '',
      explanation: '',
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
          explanation: data.explanation
        });
      });
  }

  render() {
    return(
      <div>
        <div className="Image" style={{backgroundImage: "url(" + this.state.picture + ")"}}>
          <h1> {this.state.title} </h1></div>
        <div className="ImageCredit"> this beautiful image is only here due to:
          <span> {this.state.copyright} </span>
        </div>
        <div className="ImageDescription">
          <h2 className="ImageDescriptionTitle"> the science behind </h2>
          <span> {this.state.explanation} </span>
        </div>

      </div>
   )
  }
}

export default NasaPic