import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../css/index.css';


const WidgetWind = (props) => {
  return (
    <div className="widget widget-wind">
      <div><span className="temp">{props.windMPH}</span> mph</div>
      <div>{props.windDir} direction</div>

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
