import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// Created middleware to emulate redux-promise
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';
import reducers from 'reducers';
// Destructuring initialState prevents other components from breaking after this refactor
export default ({ children, initialState = {} }) => {
  // initialState helps the test file
  // reduxPromise allows the store to function async
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, stateValidator)
  );
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};