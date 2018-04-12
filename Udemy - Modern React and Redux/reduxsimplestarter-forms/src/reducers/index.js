import { combineReducers } from 'redux';
// as imports reducer and renames it to formReducer
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  // very important to assign it to the key of form
  form: formReducer
});

export default rootReducer;
