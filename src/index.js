import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as reducers from './store/reducers';
import epics from './store/epics';

const epicMiddleware = createEpicMiddleware();
const store = createStore(
  combineReducers(reducers),
  applyMiddleware(epicMiddleware),
);
epicMiddleware.run(epics);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
