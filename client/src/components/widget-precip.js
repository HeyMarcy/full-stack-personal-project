import React, { Component } from 'react';
import '../css/index.css';

const currentTemp = "46&deg;";
const lowTemp = "38";
const highTemp = "49";


class WidgetPrecip extends Component {
  render(){
    return (
      <div className="widget">
        <div className="precip-widget">partly cloudy</div>
      </div>
    )
  }
}

export default WidgetPrecip;
