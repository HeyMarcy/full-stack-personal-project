import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        weather: [{
            base_url: 'http://api.wunderground.com/api/fbb8fb3eb8e05269/conditions/q/IL/Chicago.json'
        }, {
            city: ''
        }, {
            time: ''
        }],
    }
}
  render() {
    return (
      <div className="App ">
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
