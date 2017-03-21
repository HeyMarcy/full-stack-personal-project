import React, { Component } from 'react';
import TimeDate from './components/TimeDate'
import Widget from './components/Widget'

import './css/index.css';
import './css/sky.css';
const todaysDate = new Date();
const currentDate = todaysDate.toDateString()
const currentHour = todaysDate.getHours();
const currentMin = todaysDate.getMinutes();
class App extends Component {
  render() {
    return (
      <div className="app">
        <TimeDate />


          <div className="location-section">
              <div className="current-location">Chicago, West Loop — Old St Pats</div>
              <button className="change-loc">change</button>
          </div>
          <Widget />




          <div className="daylight-bar-section">
              <div id="daylight-bar2">
                  <div className="pointer"></div>
              </div>
          </div>

      </div>
    );
  }
}

export default App;
