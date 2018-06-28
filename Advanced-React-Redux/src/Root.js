import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';
// Destructuring initialState prevents other components from breaking after this refactor
export default ({ children, initialState = {} }) => {
  // initialState helps the test file
  // reduxPromise allows the store to function async
  const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};