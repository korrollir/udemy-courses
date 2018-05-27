// JSDOM emulates the browser in the terminal
import jsdom from 'jsdom';
import jquery from 'jquery';
// react-addons-test-utils is deprecated and now found in the below library
import TestUtils from 'react-dom/test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
// Connecting Redux to the test helper
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';

/*
  Set up testing environment to run like a browser in the command line
*/

// Create a fake HTML document.  Global = window when in Node
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
// Point jquery to the global.window instead of allowing it to look for DOM window
const $ = jquery(global.window);

/*
  Build 'renderComponent' helper that should render a given React class.
*/

// ComponentClass is a reference to the class the test builds
function renderComponent(ComponentClass, props, state) {
  // renderIntoDocument is from the TestUtils library from React
  // It requires a DOM, hence the above section
  const componentInstance = TestUtils.renderIntoDocument(
    // Wrap the component with the provider and allow access to the store
    // Avoid namespacing problems by using spread operator for props
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props}/>
    </Provider>
  );
  // Produce HTML and target it with the jquery element
  return $(ReactDOM.findDOMNode(componentInstance)); 
}
/*
  Build helper for simulating events
*/
// Connect the simulate event to all jquery elements
$.fn.simulate = function(eventName, value) {  
  // This refers to the element selected with jQuery
  // Set the value of the element to passed in value
  if (value) {
    this.val(value);
  }
  // Make sure to use [0] to select the targetted DOM node
  TestUtils.Simulate[eventName](this[0]);
}

/*
  Set up chai-jquery
*/
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };