import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// Ensure wrapped is available throughout the suite
// Remember lexical scoping
// let is used, because the variable will be reassigned multiple times
let wrapped;
// beforeEach executes prior to each it block executes
beforeEach(() => {
  // Convention to name the wrapped object as wrapped
  wrapped = shallow(<App />);
});
// it implies the name of the component
it('shows a comment box', () => {
  // Find returns an array, so look for length of 1
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});