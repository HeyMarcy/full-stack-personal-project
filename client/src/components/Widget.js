import React, { Component } from 'react';
import WidgetTemp from './widget-temp';
import WidgetWind from './widget-wind';
import WidgetPrecip from './widget-precip';
import '../css/index.css';


class Widget extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="widget-section">
          <WidgetTemp />
          <WidgetWind />
          <WidgetPrecip />
      </div>
    )
  }
}

export default Widget;
