import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    // eql tells Mocha to do a deep comparison and is used more when not comparing strings or numbers
    // Pass in undefined and an empty object for when an action is not passed to the reducer
    expect(commentReducer(undefined, {})).to.eql([]);
    // Another option is:
    // expect(commentReducer()).to.be.instanceOf(Array);
  });

  it('handles action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment' };
    // The goal is to verify the payload is added to the array
    expect(commentReducer([], action)).to.eql(['new comment']);
  });
});
// When testing a reducer, test only the default case
// Test each possible action the reducer cares about