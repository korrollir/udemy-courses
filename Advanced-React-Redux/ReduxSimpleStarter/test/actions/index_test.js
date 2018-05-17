import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
// Webpack will attach index.js
import { saveComment } from '../../src/actions'

describe('actions', () => {
  describe('saveComment', () => {
    // Testing what is returned by the action creator
    it('has the correct type', () => {
      const action = saveComment();

      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
      const action = saveComment('new comment');

      expect(action.payload).to.equal('new comment');
    });
  });
});