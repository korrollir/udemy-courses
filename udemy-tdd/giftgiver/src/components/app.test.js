import React from 'react'
/* shallow helps to create a mock component by shallowly rendering the component
  only the outer component will be rendered, not the inner components */
import { shallow } from 'enzyme'
import App from './App'

/* describe is a jest method that groups together related tests */
describe('App', () => {
/* shallow takes a JSX argument and returns an object that represents the React component
  in the testing environment. */
  const app = shallow(<App />)
  /* Unit test - checks a small piece of an app for a particular behavior */
  it('renders correctly', () => {
    /* Snapshots record a history of the React component, and every time a change is made, snapshot will update
      and ensures previous snapshots match the new one.  Allows testing of rendered JSX as a whole and ensures
      the app is rendering what is expected */
    expect(app).toMatchSnapshot()
  })
  /* using `state` tells the unit test to expect a special variable in the component */
  it('initializes the `state` with an empty list of gifts', () => {
    /* Accessing the gifts key of state */
    expect(app.state().gifts).toEqual([])
  })
  
  describe('when clicking the `add-gift` button', () => {
    const id = 1
    /* jest method that will run the included code before each encapsulated test of the describe block */
    beforeEach(() => {
      /* Find the add gift button by className and simulate click */
      app.find('.btn-add').simulate('click')
    })
    /* Cleans up after each running of the function to allow for a clean slate and to prevent
      test pollution. */
    afterEach(() => {
      app.setState({ gifts: [] })
    })

    it('adds a new gift to `state`', () => {
      /* Expects the gifts array to be non-empty.
        Each gift will have an id that begins with 1. */
      /* props on a single node error signifies the node is not created yet */
      expect(app.state().gifts).toEqual([{ id }])
    })
    
    it('adds a new gift to the rendered list', () => {
      /* enzyme provides children, which returns an array of child nodes of the identified knode */
      expect(app.find('.gift-list').children().length).toEqual(1)
    })

    it('creates a Gift component', () => {
      /* Check whether JSX is present or not.  Return Bool */
      expect(app.find('Gift').exists()).toBe(true)
    })

    describe('and the user wants to remove the added gift', () => {
      beforeEach(() => {
        /* instance helper function allows access to the class helper methods */
        app.instance().removeGift(id)
      })

      it('removes the gift from `state`', () => {
        expect(app.state().gifts).toEqual([])
      })
    })
  })
})
