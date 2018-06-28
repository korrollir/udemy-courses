import {
  FETCH_USERS
} from '../actions/types';
// Assumes it will receive a payload of an array of objects (users)
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      // action.payload.data is from the promise request
      return [ ...state, ...action.payload.data ];
  }
  // Default case
  return state;
}
