import { SAVE_COMMENT } from '../actions/types';
// State is based on the list of comments, which is an array
export default function(state = [], action) {
  switch(action.type) {
    case SAVE_COMMENT:
      return [ ...state, action.payload ];
  }

  return state;
}