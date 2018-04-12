import { FETCH_WEATHER } from '../actions/index';
// Data structure chosen as an array to store multiple cities
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // data contains city, location, weather from ajax request
      // Do not manipulate state directly, even in Redux
      // return state.concat([action.payload.data]);
      // destructuring operator takes all entries and effectively flattens it
      return [ action.payload.data, ...state ];
  }
  return state;
}
