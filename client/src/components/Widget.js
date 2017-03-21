

import React, { Component } from 'react';
import '../css/index.css';


class Widget extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="widget-section">
          <div className="widget">
              <span className="current-temp"> 40&deg; </span>
              <span className="hi-low-temp"> 36&deg;&nbsp;|&nbsp;43&deg;</span>
          </div>
          <div className="widget">
              <div className="wind-widget">6.5<small>mph</small></div>
          </div>
          <div className="widget">
              <div className="precip-widget">partly cloudy</div>
          </div>
      </div>
    )
  }
}

export default Widget;
