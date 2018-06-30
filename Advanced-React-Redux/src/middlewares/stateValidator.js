import tv4 from 'tv4';
import stateSchema from './stateSchema';

export default ({ dispatch, getState }) => next => action => {
  // Rememvber that all middleware should be able to function regardless of order
  next(action);
  // getState contains all the data from the Redux store
  if (!tv4.validate(getState(), stateSchema)) {
    // Shows the error to show the error to the developer.
    console.warn('Invalid state schema detected');
  }
};