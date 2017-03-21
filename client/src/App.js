import React, { Component } from 'react';
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
          <div className="time-date-section">
              <div className="cuurent-date">
                  <span>{currentDate}</span>
              </div>
              <div className="current-time">
                  <span>{currentHour}:{currentMin}</span>
              </div>
              <div className="hours-left">8.5 hours left until sunset at 7:21pm</div>
          </div>

          <div className="location-section">change
              <div className="current-location">Chicago, West Loop — Old St Pats</div>
              <button className="change-loc">change</button>
          </div>change

          <div className="widget-section">
              <div className="temp-wiget">
                  <span className="current-temp"> 40&deg; </span>
                  <span className="hi-low-temp"> 36&deg;&nbsp;|&nbsp;43&deg;</span>
              </div>
          </div>
          <div className="widget">
              <div className="wind-widget">6.5<small>mph</small></div>
          </div>
          <div className="widget">
              <div className="precip-widget">partly cloudy</div>
          </div>

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
