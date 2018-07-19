import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
// Allows for using multiple HOCs without chaining
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {
  // Arrow function method removes the need to bind 'this' elsewhere
  onSubmit = formProps => {
    // Callback to redirect to Feature route
    this.props.signin(formProps, () => {
      this.props.history.push('/feature');
    });
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
        <div>{this.props.errorMessage}</div>
        <button>Sign In</button>
      </form>
    );
  }
};

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' })
)(Signin);
