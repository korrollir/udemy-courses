import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      // reach into state object and remove key/value that match that id
      return _.omit(state, action.payload);
    case FETCH_POSTS:
      // see note in Drive about mapping keys to the object
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      const post = action.payload.data;
      // add posts already fetched and include them in
      // ES5 version
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;
      // ES6 version
      // [] around the key is key interpolation
      return { ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
}
