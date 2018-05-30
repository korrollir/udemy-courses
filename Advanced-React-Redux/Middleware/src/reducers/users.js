import {
  FETCH_USERS
} from '../actions/types';
// Assumes it will receive a payload of an array of objects (users)
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      return [ ...state, ...action.payload ];
  }
  // Default case
  return state;
}
