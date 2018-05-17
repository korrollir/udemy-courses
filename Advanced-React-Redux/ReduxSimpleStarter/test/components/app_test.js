// Tests the component named app
// Ask what you care about functioning properly
// Import helper functions
import { renderComponent, expect } from '../test_helper';
// Importing the component to be tested
import App from '../../src/components/app';

// The strings inside 'describe' and 'it' are solely for description
// Target is referring to the App component
// Use 'describe' to group together similar tests
// Takes two arguments: a string and a function
describe('App', () => {
  
  // // Use 'it' to test a single attribute of a target
  // // Takes two arguments: a string and a function
  // it('shows the correct text', () => {
  //   // Create an instance of App
  //   const component = renderComponent(App);
    
  //   // Use 'expect' to make an 'assertion' about a target
  //   // Anatomy of an assertion:
  //   // Declaration of the target, assertion matcher (how to compare the two given
  //   //  values), the expected value
  //   // 'expect' is a function that returns an object
  //   expect(component).to.contain('React simple starter');
  // });

  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });
  // Assert the component gets rendered by targeting the unique class name
  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});