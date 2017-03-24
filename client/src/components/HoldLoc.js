import React, { Component } from 'react';
// import InputLoc from './InputLoc';
import CurrentLoc from './CurrentLoc';


import '../css/index.css';

class HoldLoc extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="loc-section">

          <CurrentLoc />
      </div>
    )
  }
}

export default HoldLoc;
