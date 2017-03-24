import React from 'react';
import { connect } from 'react-redux';
import '../css/index.css';


const WidgetTemp = (props) => {
  return (
    <div className="widget">
      <h6 className="current-temp">{ props.temp }</h6>
      <p>{ props.low } <span className="light"> &nbsp;|&nbsp; </span> { props.high }</p>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
    temp:state.temp_f,
    low: state.low,
    high:state.high
});


export default connect(mapStateToProps)(WidgetTemp);
