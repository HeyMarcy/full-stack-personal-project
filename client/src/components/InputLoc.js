import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/index.css';



const InputLoc = (props) => {
  return (
  <div>
    <input type="text" className="form-city" placeholder="City" value={props.city} />
      <input type="text" className="form-city" placeholder="State" value={props.stateName} />

          <span className="input-group-btn">
            <button type="submit" className="btn">submit</button>
    </span>
    </div>


  )
}

const mapStateToProps = (state, props) => ({
    city: state.city,
    stateName: state.stateName
});

export default connect(mapStateToProps)(InputLoc);
