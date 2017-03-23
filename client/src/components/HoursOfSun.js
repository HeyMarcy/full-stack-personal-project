import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/index.css';

const HoursOfSun = (props) => {
  return (
    <div className="hours-left"> { props.timeToSunset } hours left until sunset at { props.sunset }</div>
  );
};


const mapStateToProps = (state, props) => ({
    sunset:state.sunset,
});
export default connect(mapStateToProps)(HoursOfSun);
