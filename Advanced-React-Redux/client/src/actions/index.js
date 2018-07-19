import axios from 'axios';

import { AUTH_USER, AUTH_ERROR } from './types';

// Using redux-thunk gives total control over the dispatch process,
// an alternative way of doing async action creators.
// Allows use of returning either an action object or a function from action creators
// which in turns allows returning any number of actions from a single action creator

// redux-thunk boilerplate
export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signup', formProps );

    dispatch({ type: AUTH_USER, payload: response.data.token });
    // Store the Jwt in localstorage for use
    localStorage.setItem('token', response.data.token);
    // callback is from the signup component and is used to redirect user to the feature page
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

export const signout = () => {
  // Remove user jwt from storage
  localStorage.removeItem('token');

  // Empty string will flip authenticated to false
  return {
    type: AUTH_USER,
    payload: ''
  };
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signin', formProps );

    dispatch({ type: AUTH_USER, payload: response.data.token });
    // Store the Jwt in localstorage for use
    localStorage.setItem('token', response.data.token);
    // callback is from the signup component and is used to redirect user to the feature page
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login used' });
  }
};