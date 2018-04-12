// all reducers get two arguments: current state and action
// state refers to the reducer's state, not the application state
// reducer must always returned a value that is not undefined
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      // action.payload is the selected book
      return action.payload;
  }
  // For when we do not care about that state
  return state;
}
