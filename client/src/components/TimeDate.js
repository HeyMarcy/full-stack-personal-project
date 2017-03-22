
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/index.css';



class TimeDate extends Component {
  render(){
    return (
      <div className="time-date-section">
          <div className="curent-date">
              <span>{ this.props.day }, { this.props.month } { this.props.date } </span>
          </div>
          <div className="current-time">
              <span><h1>{ this.props.hour }:{ this.props.minutes }</h1></span>
          </div>

      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
    hour: state.hour,
    minutes: state.minutes,
    day: state.day,
    month: state.month,
    date: state.date
});

export default connect(mapStateToProps)(TimeDate);
