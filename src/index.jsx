
// Entry point of app
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.jsx';

/*
  import { createStore } from 'redux';
  import { Provider } from 'react-redux';
  import App from './containers/App';
  import reducers from './reducers';

  let store = createStore(reducers);

  ReactDOM.render(
  <Provider store={store}>
    <div className="app">
      <h3>Container App (contains redux logic)</h3>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
  );
*/

ReactDOM.render(
    <div className="app">
      <App />
    </div>,
    document.getElementById('root')
);
