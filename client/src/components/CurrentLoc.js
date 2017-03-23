import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/index.css';



const CurrentLoc = (props) => {
  return (
    <div className="location-section">
        <div className="current-location">{ props.locationCity}, {props.locationState}</div>
        <button className="change-loc">change</button>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
    locationCity: state.locationCity,
    locationState: state.locationState
});

export default connect(mapStateToProps)(CurrentLoc);
