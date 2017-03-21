import React, { Component } from 'react';
import '../css/index.css';

const currentTemp = "46&deg;";
const lowTemp = "38";
const highTemp = "49";


class WidgetWind extends Component {
  render(){
    return (
      <div className="widget">
          <div className="wind-widget">6.5<small>mph</small></div>
      </div>
    )
  }
}

export default WidgetWind;
