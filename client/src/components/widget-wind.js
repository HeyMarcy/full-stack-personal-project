import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../css/index.css';


const WidgetWind = (props) => {
  return (
    <div className="widget">
      <div className="wind-widget">{props.windMPH}<small>mph</small></div>
      <div className="wind-widget">{props.windDir}<small>mph</small></div>
      <div className="wind-widget">{props.windDegrees}<small>mph</small></div>
      <div className="wind-widget">{props.windGust}<small>mph</small></div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
    windMPH: state.wind_mph,
    windDir: state.wind_dir,
    windDegrees: state.wind_degrees,
    windGust: state.wind_gust_mph
});


export default connect(mapStateToProps)(WidgetWind);
