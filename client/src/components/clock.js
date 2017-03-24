import React, {Component} from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';

import '../css/index.css';
// import '../utility.js';

class Clock extends React.Component {
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 100);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        let date = new Date();
        this.props.dispatch(actions.currentTime(date.getHours(), date.getMinutes()));
    }

    render() {
      const formatMins = (mins) => {
        if ( mins < 10 ){ mins = "0"+mins }
        else { mins }
        return mins;
      }

      const formatHours= (hrs) => {
        let h = hrs;
        if (h >= 12){
          h = hrs-12;
        };
        if (h === 0){
          h = 12
        };
        return h;
      };
      //end format

      let minPretty = formatMins(this.props.minutes);
      let hoursPretty = formatHours(this.props.hour);
        return (
            <div>
                <span>
                    <h1>{hoursPretty}:{minPretty}</h1>
                </span>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({hour: state.hour, minutes: state.minutes});

export default connect(mapStateToProps)(Clock);
