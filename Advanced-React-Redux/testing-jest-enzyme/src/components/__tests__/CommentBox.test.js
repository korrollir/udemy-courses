import React from 'react';
// Only choosing Full DOM mode over shallow for experience
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmout();  
});

it('has a textarea and a button', () => {
  // Look in component and find textarea and button
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});
