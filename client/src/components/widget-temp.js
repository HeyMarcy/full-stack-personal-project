import React from 'react';
import { connect } from 'react-redux';
import '../css/index.css';


const WidgetTemp = (props) => {
  return (
    <div className="widget">
      <h6 className="current-temp">{ props.temp }</h6>
      <span className="hi-low-temp">{ props.low } | { props.high }</span>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
    temp:state.temp_f,
    low: state.low,
    high:state.high
});


export default connect(mapStateToProps)(WidgetTemp);
