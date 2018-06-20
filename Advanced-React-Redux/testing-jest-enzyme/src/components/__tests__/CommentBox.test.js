import React from 'react';
// Only choosing Full DOM mode over shallow for experience
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();  
});

it('has a textarea and a button', () => {
  // Look in component and find textarea and button
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('has a textarea that users can type in', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment'} // Emulates event.target.value
  });
  // Force the component to update state
  wrapped.update();
  // Assert with the correct 'value' prop
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});
  