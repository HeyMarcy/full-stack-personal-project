
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/index.css';



const WidgetTemp = (props) => {
  return (
    <div className="widget">
      <span className="current-temp">{ props.temp }</span>
      <span className="hi-low-temp">{ props.lowTemp } | { props.highTemp }</span>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
    temp: state.temp_f,
    low: state.lowTemp,
    high:state.highTemp
});


export default connect(mapStateToProps)(WidgetTemp);
