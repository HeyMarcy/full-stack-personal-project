import React, { Component } from 'react';
import WidgetTemp from './widget-temp';
import WidgetWind from './widget-wind';
import '../css/index.css';

class Widgets extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="widget-section">
          <WidgetTemp />
          <WidgetWind />
      </div>
    )
  }
}

export default Widgets;
