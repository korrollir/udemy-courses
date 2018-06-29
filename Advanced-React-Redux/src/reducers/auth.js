import { CHANGE_AUTH } from 'actions/types';
// By default a user is not signed into the app
export default function(state = false, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      // Will return true or false based on whether user is logged in
      return action.payload;
    default:
      return state;
  }
}