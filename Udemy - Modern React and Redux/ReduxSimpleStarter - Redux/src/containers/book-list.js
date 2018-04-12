import React, { Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={ book.title }
          onClick={ () => this.props.selectBook(book) }
          className="list-group-item">{ book.title }

        </li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        { this.renderList() }
      </ul>
    )
  }
}

// The connection between react and redux
// Whenever component is re-rendered, the state here is updated
function mapStateToProps(state) {
  // Take application state as an argument and return state as props in this
  // component.
  return {
    //state.books comes from reducer_books
    books: state.books
  }
}

// Anything returned from this function will end up as props on the BookList
// container.
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all
  // of the reducers.  The result flows through dispatch.
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}
// connect takes a function and a component and produces a container
// Promote BookList from a component to a container.  Needs to know about new
// dispatch method selectBook.  Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
