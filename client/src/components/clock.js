import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

import '../css/index.css';



class Clock extends React.Component {
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let date = new Date();
    this.props.dispatch(actions.currentTime(date.getHours(), date.getMinutes()));
  }

  render() {
    return (
      <div>
        <span><h1>{ this.props.hour }:{ this.props.minutes }</h1></span>

      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
    hour: state.hour,
    minutes: state.minutes,
});

export default connect(mapStateToProps)(Clock);
