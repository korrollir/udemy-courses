import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
  // remember - load the post after the component has been called to prevent racing
  componentDidMount() {
    // check if posts are already fetched to prevent double API pinging
    if(!this.props.posts) {
      // from react-router (similar to req.params.id)
      const { id } = this.props.match.params;

      this.props.fetchPost(id);
    }
  }

  onDeleteClick() {
    // using match.params ensures the post is loaded, and the id is available
    const {id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if(!post) {
      return <div>Loading....</div>;
    }

    return (
      <div>
        <Link to="/" className="btn btn-primary">Back</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}
// destructuring of state to only pull off posts
// second argument is the props object that is headed to the component
// ownProps === this.props
// this will help with allowing mapStateToProps to become modular in its own file
// eliminates data dependency
function mapStateToProps({ posts }, ownProps) {
  // returns just the single post being sent to the component
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
