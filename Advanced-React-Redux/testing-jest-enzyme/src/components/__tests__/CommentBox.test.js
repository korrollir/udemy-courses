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

// describe groups together tests and limits the scope of beforeEach/afterEach statements
describe('the textarea', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' } // Emulates event.target.value
    });
    // Force the component to update state
    wrapped.update();
    // Assert with the correct 'value' prop
  });

  it('allows users to type in it', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });
  
  it('empties when form is submitted', () => {
    // This would be good form to test the textarea changed, but it is covered
    // in the above test.
    // expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    // Submit the form
    wrapped.find('form').simulate('submit');
    // Update following submission to update state
    wrapped.update();
    // Assert the textarea is empty after form submission
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
