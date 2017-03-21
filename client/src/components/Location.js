import React, { Component } from 'react';
import '../css/index.css';


class Location extends Component {
  render(){
    return (
      <div className="location-section">
          <div className="current-location">Chicago, West Loop — Old St Pats</div>
          <button className="change-loc">change</button>
      </div>
    )
  }
}

export default Location;
