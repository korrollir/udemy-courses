import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
// Allows for using multiple HOCs without chaining
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
  // Arrow function method removes the need to bind 'this' elsewhere
  onSubmit = formProps => {
    this.props.signup(formProps);
  };

  render() {
    // redux-form method
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name='email'
            type='email'
            component='input'
            autoComplete='none'
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name='password'
            type='password'
            component='input'
            autoComplete='none'
          />
        </fieldset>
        <button>Sign Up</button>
      </form>
    );
  }
};

export default compose(
  connect(null, actions),
  reduxForm({ form: 'signup' })
)(Signup);
