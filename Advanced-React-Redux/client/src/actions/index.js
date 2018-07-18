import axios from 'axios';

import { AUTH_USER } from './types';

// Using redux-thunk gives total control over the dispatch process,
// an alternative way of doing async action creators.
// Allows use of returning either an action object or a function from action creators
// which in turns allows returning any number of actions from a single action creator

// redux-thunk boilerplate
export const signup = (formProps) => dispatch => {
  axios.post('http://localhost:3090/signup', formProps );
};
  