import React, { Component } from 'react';
import './Listing.css'; // Tell Webpack that Listing.js uses these styles

class Listing extends Component {
  constructor(props) {
    super();
    this.state = {
      people: [],
    }
  }

  componentDidMount() {

      fetch('http://api.open-notify.org/astros.json')
      .then(results => {
        return results.json();
      }).then(data => {
        console.log(data);
        let people = data.people.map((person) => {
          return(
            <a key={person.name}> {person.name} </a>
          )
        }
      );
      this.setState({people: people})
      });
}

  render() {
    return(
      <div className="Listing">
        <h2> Who is in space right now? </h2>
        <div>
          {this.state.people}
        </div>
      </div>
   )
  }
}

export default Listing
