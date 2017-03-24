import React, { Component } from 'react';
import { connect } from 'react-redux';
import Clock from './clock'
import '../css/index.css';

class TimeDate extends Component {
  render(){


    return (
      <div className="time-date-section">
        <div className="current-time">
          <Clock  />
        </div>
        <div className="curent-date light">
              <span>{ this.props.day }, { this.props.month } { this.props.dayOfMonth } </span>
          </div>

      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
    day: state.day,
    month: state.month,
    dayOfMonth: state.dayOfMonth
});

export default connect(mapStateToProps)(TimeDate);
