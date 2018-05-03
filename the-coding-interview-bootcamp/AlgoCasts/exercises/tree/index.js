// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  // Given some data, create a new node and add it to the current node's children array
  add(data) {
    this.children.push(new Node(data));
  }
  // Given some data, look at each child element of the current node
  // and remove any node with data === data
  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  
  traverseBF(fn) {
    // Create an empty array and push in root node
    const arr = [this.root];
    // Iterate through the array: while there are still elements
    while (arr.length) {
      // Take out the first element and throw it away
      const node = arr.shift();
      // Put its children in the array using the spread operatort, which keeps it flat
      arr.push(...node.children);
      // Call the passed in function with the removed element as an argument
      fn(node);
    }
  }

  traverseDF(fn) {

  }
}

module.exports = { Tree, Node };
