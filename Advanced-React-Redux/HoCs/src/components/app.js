import React, { Component } from 'react';

// Components
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
