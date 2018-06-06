import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';
// it implies the name of the component
it('shows a comment box', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);
  // Looks inside the div to check if CommentBox is in there
  // Bad test due to it requiring intimate knowledge of internal implementation
  // expect(div.innerHTML).toContain('Comment Box');
  // Instead, check whether the component itself is in the div using enzyme

  // Cleanup method to free memory after the test is complete
  ReactDOM.unmountComponentAtNode(div);
});