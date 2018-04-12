import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Link replaces anchor tags in React
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  // runs after component loads.  good for making requests or one-time loading
  // procedures
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    // lodash .map is able to map over objects, unlike vanilla .map
    return _.map(this.props.posts, post => {
      return (
        <li className='list-group-item' key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className='text-xs-right'>
          <Link className='btn btn-primary' to='/posts/new'>
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

// using the action creator in the connect method is identical to using
// the connect function mapStateToProps, which is better when you need to do
// computations prior to connecting
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
