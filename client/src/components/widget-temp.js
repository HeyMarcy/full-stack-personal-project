
import React, { Component } from 'react';
import '../css/index.css';

const currentTemp = "46&deg;";
const lowTemp = "38";
const highTemp = "49";


class WidgetTemp extends Component {
  render(){
    return (
      <div className="widget">
        <span className="current-temp">{ currentTemp }</span>
        <span className="hi-low-temp">{ lowTemp } | { highTemp }</span>
      </div>
    )
  }
}

export default WidgetTemp;
