// dispatch is an object returned from the action
export default function({ dispatch }) {
  // Currying - Will call the next function and then applying the action to the function
  return next => action => {
    // Does action.payload contain a promise?
    // No, it does not (.then is a promise method)
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
    // Yes, it does
    // Wait for the promise to resolve
    // action.payload is an async promise
    action.payload
      .then(response => {
        // Create a new action with the response object as payload
        const newAction = { ...action, payload: response };
        // dispatch sends the newAction to the top of the stack through everything again
        dispatch(newAction);
      });
  };
}