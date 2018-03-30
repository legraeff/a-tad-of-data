import React, { Component } from 'react';
import './NasaPic.css'; // Tell Webpack that NasaPic.js uses these styles

class NasaPic extends Component {
  constructor(props) {
    super();
    this.state = {
      mediaType: '',
      picture: '',
      copyright: '',
      title: '...',
      explanation: '',
      video: ''
    };
    this.goToGoogle = this.goToGoogle.bind(this);
  }
  goToGoogle() {
    var search = this.state.copyright.replace(/\s+/g, '+').toLowerCase();
    window.open('https://www.google.com.br/search?q=' + search)
  };


  componentDidMount() {

      fetch('https://api.nasa.gov/planetary/apod?api_key=cZ2IbDQRAs29x89yVb3yFzXEVkNBKTdg7XyJQb9h')
      .then(results => {
        return results.json();
      }).then(data => {
        if (data.media_type !== 'video') {
          this.setState({picture: data.url})
        }
        this.setState({
          mediaType: data.media_type,
          copyright: data.copyright,
          title: data.title,
          video: data.url + '&autoplay=1&controls=0&loop=1&showinfo=0',
          explanation: data.explanation
        });
      });
  }

  render() {
    var copyright = this.state.copyright;
    const copyrightDiv = copyright ? (
      <div className="ImageCredit"> this beautiful image is only here due to:
        <a onClick={this.goToGoogle}>{this.state.copyright} </a> and
        <a href="https://apod.nasa.gov/apod/astropix.html">NASA APOC </a>
      </div>
    ) : (
      <div className="ImageCredit"> <a href="https://apod.nasa.gov/apod/astropix.html">NASA APOC </a> </div>
    );

    const background = (this.state.mediaType !== 'video') ? (
      <div className="Image" style={{"backgroundImage": "url(" + this.state.picture + ")"}}>
        <h1> {this.state.title} </h1>
      </div>
    ) : (
      <div className="Image" style={{"background": "transparent"}}>
        <h1> {this.state.title} </h1>
        <div className="video-background">
          <iframe src={this.state.video} frameBorder="0" title="videoBackground" allowFullScreen></iframe>
        </div>
      </div>
    );

    return(
      <div>
        {background}
        {copyrightDiv}
        <div className="ImageDescription">
          <h2 className="ImageDescriptionTitle"> the science behind </h2>
          <span> {this.state.explanation} </span>
        </div>

      </div>
   )
  }
}

export default NasaPic
