export function selectBook(book) {
  // selectBook is an action creator that returns an action,
  // an object with a type prop.
  return {
    // type describes the purpose of the action
    // Type is always uppercase
    type: 'BOOK_SELECTED',
    // The payload the further clarifies the condtion of the action
    payload: book
  };
}
