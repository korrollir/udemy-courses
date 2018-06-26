import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  // Call reducer, pass in fake action, assert the value the reducer returns
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  }

  const newState = commentsReducer([], action);

  expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
  // Passing in empty object that has no (unknown) type
  const newState = commentsReducer([], {});

  expect(newState).toEqual([]);
});