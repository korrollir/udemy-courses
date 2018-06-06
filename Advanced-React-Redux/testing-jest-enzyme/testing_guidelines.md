# Framework to determine what to test

1. Look at each individual part of the application

2. Imagine telling a friend what each part does

3. Write a test to verify each part does what is expected

### For example

* App component
  - Shows the Comment Box inside of it
  - Shows the Comment List inside of it

* CommentBox Component
  - Shows a text area and a button
  - Users can enter input into the textarea and submit it
  - When the input is submitted, textarea should get emptied

* CommentList Component
  - Shows one 'li' element per comment
  - Text from each comment is visible

* Comments Reducer
  - Properly hands actions with a type of 'SAVE_COMMENT'
  -Doesn't throw an ereror if it gets an action with any other type

* SaveComment Action
  - Has a type of 'SAVE_COMMENT'
  - Produces an action that has a payload of the new comment's text