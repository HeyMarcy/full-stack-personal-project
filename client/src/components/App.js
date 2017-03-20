import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="cuurent-date">
          <span> March 20, 2017</span>
        </div>
        <div className="current-time">
          <span> 10:30</span>
        </div>
        <div className="current-temp">
          <span> 40&deg; </span>
        </div>

      </div>
    );
  }
}

export default App;
