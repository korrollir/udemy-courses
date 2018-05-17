import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Passing current comment to the action creator
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form
        className='comment-box'
        onSubmit={this.handleSubmit.bind(this)}
      >
        <h4>Add a comment</h4>
        <textarea 
          value={this.state.comment}
          onChange={this.handleChange.bind(this)}
        />
        <div>
          <button action='submit'>
            Submit Comment
          </button>
        </div>
      </form>
    )
  }
}

// Do not care about state, so the first argument is null
// Shortcut of passing entire actions object automatically binds all the actions to this component
export default connect(null, actions)(CommentBox);