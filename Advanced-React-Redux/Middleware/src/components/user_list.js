// Container component connected to Redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserList extends Component {
  // Seed the user list from the action creator
  componentWillMount() {
    this.props.fetchUsers();
  }
  // Build user card
  renderUser(user) {
    return (
      <div key={user.name} className='card card-block'>
        <h4 className='card-title'>{user.name}</h4>
        <p className='card-text'>Beer Brewery</p>
        <a className='btn btn-primary'>Email</a>
      </div>
    )
  }

  render() {
    return (
      <div className='user-list'>
        {this.props.users.map(this.renderUser)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps, actions)(UserList);