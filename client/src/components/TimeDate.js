import React, { Component } from 'react';
import '../css/index.css';
const todaysDate = new Date();
const currentDate = todaysDate.toDateString()
const currentHour = todaysDate.getHours();
const currentMin = todaysDate.getMinutes();


class TimeDate extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="time-date-section">
          <div className="cuurent-date">
              <span>{ currentDate }</span>
          </div>
          <div className="current-time">
              <span><h1>{ currentHour }:{ currentMin }</h1></span>
          </div>
          <div className="hours-left">8.5 hours left until sunset at 7:21pm</div>
      </div>
    )
  }
}

export default TimeDate;
