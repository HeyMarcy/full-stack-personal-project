import React, { Component } from 'react';
import TimeDate from './components/TimeDate';
import Widget from './components/Widget';
import Location from './components/Location';
import DayMeter from './components/DayMeter';

import './css/index.css';
import './css/sky.css';



class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <TimeDate />
          <Location />
          <Widget />
        </div>
        <DayMeter />
      </div>
    );
  }
}

export default App;
