import { SAVE_COMMENT, FETCH_COMMENT } from 'actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENT:
      // Maps over the JSON object and creates an array of comment.name
      const comments = action.payload.data.map(comment => comment.name);
      // Merges the comments array to state
      return [...state, ...comments];
    default:
      return state;
  }
}