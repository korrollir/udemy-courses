import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    // Get context to allow access to react-router
    // static defines a class-level property
    static contextTypes = {
      router: React.PropTypes.object
    }
    // Returns user to root route if user is not logged in
    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');  
      }
    }
    // Return user to root route when logging out
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      // Rest operator ensures any props are passed through to the component
      return <ComposedComponent {...this.props}/>
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated };
  }
  // Allows HoC to know where user is logged in.
  return connect(mapStateToProps)(Authentication);
}

// In some other location
// How to use this HoC

/*
  import Authentication -- This is the HoC
  import Resources -- This is the component to wrap

  const ComposedComponent = Authentication(Resources);

  -- In some render method --
  <ComposedComponent resources={resourceList}/>
*/