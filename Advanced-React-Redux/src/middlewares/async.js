// dispatch is an object returned from the action
// dispatch takes an action and kicks off middlewares and reducers
// Currying - next is a middleware method
export default ({ dispatch }) => next => action => {
  // Does action.payload contain a promise?
  // .then is a method for promises
  if (!action.payload || !action.payload.then) {
    // No - Send the action to the next middleware
    return next(action);
  }
  // Yes - Wait for it to resolve
  action.payload.then(function(response) {
    // Create a new action and dispatch the new data
    // Rest operator is for allowing any new properties that may
    // have been added other than type or payload.
    // Overwrite payload with the data returned from the promise
    const newAction = { ...action, payload: response };
    // Dispatch and go through all the middlewares again
    dispatch(newAction);
  });
}
