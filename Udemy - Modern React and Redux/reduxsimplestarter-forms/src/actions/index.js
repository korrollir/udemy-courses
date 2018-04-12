import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=BRUISER10';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

// callback refers to the callback from the onSubmit() from PostsNew
export function createPost(values, callback) {
  // First axios param is the URL, second is the object being posted to API
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    // calling the callback prevents race conditions
    // now order of operations is create new post then redirect
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

// assume user can access a post directly.  posts/show needs to be able to fetch
// its own data
export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  }
}
