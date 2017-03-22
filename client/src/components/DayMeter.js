import React, { Component } from 'react';
import '../css/index.css';
import '../css/sky.css';

class DayMeter extends Component {
  render(){
    return (
      <div className="daylight-bar-section">
            <div id="daylight-bar2">
                <div className="pointer"></div>
            </div>
        </div>
    )
  }
}

export default DayMeter;
