import React from 'react';
import { mount } from 'enzyme';
// Fakes a response for axios
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  // Tells moxios to intercept any request made
  moxios.install();
  // Respond with data to trick axios
  // 1st param is the url to intercept
  // 2nd param is to customize how moxios responds to the request
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
  });
});

afterEach(() => {
  // Removes the intercept and cleans up the event loop
  moxios.uninstall();
});
// done is provided by jest to allow for a delayed triggering of an assertion
it('can fetch a list of comments and display them', (done) => {
  // Attempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  // Find the fetchComments button and click it
  wrapped.find('.fetch-comments').simulate('click');
  // Introduce a pause to allow moxios to mock a response
  moxios.wait(() => {
    wrapped.update();
    // Expect to find a list of comments
    expect(wrapped.find('li').length).toEqual(2);
    // Tell just to complete the test after the 100ms delay
    done();
    wrapped.unmount();
  });
});