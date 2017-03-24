import React, { Component } from 'react';
import { connect } from 'react-redux';
import Clock from './components/clock';
import TimeDate from './components/TimeDate';
import Widgets from './components/Widgets';
import CurrentLoc from './components/CurrentLoc';

import './css/sky.css';
import './css/index.css';
// import './css/knockout-stylesheet.css';

import * as actions from './actions'

class App extends Component {

componentDidMount() {
    this.props.dispatch(actions.fetchData());
    this.props.dispatch(actions.fetchSky());
}

  render() {
    return (
      <div className="app">
        <div className={`bg sky-gradient-${this.props.hour}`}>
          <div className="container">
            <CurrentLoc />
            <TimeDate />
            <Widgets />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({hour, minutes})=>({hour, minutes})


export default connect(mapStateToProps)(App);
