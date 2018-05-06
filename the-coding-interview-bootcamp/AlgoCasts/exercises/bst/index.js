// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null; 
  }

  insert(data) {
    //  Most common method of inserting is using recursion
    // Test whether to go left and if a left node exists
    if (data < this.data && this.left) {
      // Recursion to turn the focus node to the left 
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    }

    if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }
  // Returns boolean
  contains(data) {
    if (this.data === data) {
      return this;
    }
    // Handles recursion all the way down to the right side
    if (this.data < data && this.right) {
      return this.right.contains(data);
    }
    //  Handles recurion all the way down to the left side
    return this.left.contains(data);
  }
  // Based case 
  return null;
}

module.exports = Node;
