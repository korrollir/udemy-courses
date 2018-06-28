import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
// Remember - Root is needed due to CommentList being connected to Redux
import Root from 'Root';

let wrapped;

beforeEach(() => {
  // initialState is used to create a state so CommentList will render <li> elements
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  }
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
});
// This will be dependent upon being able to pass state through to the store.
// Cannot use a default state in the beforeEach, because mapStateToProps will default
// to an empty array.
// The solution will be based in using the initialState
it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});
// Ensures there is no bug inside list rendering
it('shows the text for each comment', () => {
  // Enzyme's render method will return a CheerioWrapper (https://cheerio.js.org/)
  expect(wrapped.render().text()).toContain('Comment 1');
  expect(wrapped.render().text()).toContain('Comment 2');
});