import React, { Component } from 'react';
// Field is redux-form component to render an input Field
// reduxForm is a function similar to connect helper from react-redux
// reduxForm allows the component to communicate with the formReducer
// it handles the state of our form
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  // field is an object that contains event handlers to wire up the JSX to Field
  // {field.meta.error} is automatically added by the validate() method and
  // refers to the error string assigned in validate()
  renderField(field) {
    // nested destructuring to pull off the properties touched and error to refactor
    // and make DRY
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={ className }>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : '' }
        </div>
      </div>
    );
  }

  // Call an action creator to save to API
  onSubmit(values) {
    this.props.createPost(values, () => {
      // Redirects to another route
      // Helps to prevent race conditions that can make data not display before
      // the redirect
      this.props.history.push('/');
    });

  }

  // component in Field is a function that returns JSX
  render() {
    // handleSubmit is a prop passed to the component from reduxForm
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

// called automatically when user attempts to submit the form
// validates form entries
// values is the name by convention for an object param
// values responds to name props on Field
function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = 'Enter a title!';
  }

  if(!values.categories) {
    errors.categories = 'Enter some categories!';
  }

  if(!values.content) {
    errors.content = 'Enter post content!';
  }

  // If errors is empty, the form is valid to submit
  // If errors has any properties, redux form assumes form is invalid
  return errors;
}

// reduxForm takes 2 params - function with options object and the component
// assigned string needs to be unique in the event of multiple forms being rendered
// connect the redux form to the posts reducer
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  // Embedding connect into the reduxForm helper
  connect(null, { createPost })(PostsNew)
);
