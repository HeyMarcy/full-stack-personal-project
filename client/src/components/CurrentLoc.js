import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/index.css';



const CurrentLoc = (props) => {
  return (
    <div className="location-section">
        <div className="current-location">{ props.city}, {props.state}</div>
        <button className="change-loc">change</button>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
    city: state.city,
    state: state.state
});

export default connect(mapStateToProps)(CurrentLoc);
