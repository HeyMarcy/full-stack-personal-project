import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimeDate from './components/TimeDate';
import Widgets from './components/Widgets';
import CurrentLoc from './components/CurrentLoc';
import DayMeter from './components/DayMeter';

import './css/index.css';
import './css/sky.css';

import * as actions from './actions'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(actions.fetchData());
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <TimeDate />
          <CurrentLoc />
          <Widgets />
        </div>
        <DayMeter />
      </div>
    );
  }
}


export default connect()(App);
