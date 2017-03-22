import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <div className="sky-gradient-14">
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
