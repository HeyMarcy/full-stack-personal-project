import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/index.css';

const HoursOfSun = (props) => {
  return (
    <div className="hours-left"> { props.timeToSunset } hours left until sunset at { props.sunsetToday }</div>
  );
};
export default connect(mapStateToProps)(HoursOfSun);
