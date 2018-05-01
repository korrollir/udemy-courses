// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

// Used to initialize a new linked list
// Only aware of the head node
/*
  For interview, if asked to create a method to getFirst, insertFirst, etc, ask if
  we are going to be doing any other retrieval of any other elements?  If we are, maybe I
  should not write an insertFirst method and write an insertAt method instead.
  Refactor insertFirst to be this.insertAt(data, 0), getLast as return this.getAt(this.size() - 1)
*/
class LinkedList {
  constructor() {
    this.head = null;
  }
  // Creating for..of iterator
  // This defines a generator function with a key of Symbol.iterator
  *[Symbol.iterator]() {
    let node = this.head;

    while(node) {
      yield node;
      node = node.next;
    }
  }
  // Empties the list of any nodes
  clear() {
    // With the head being equal to null, the linked list does not have any point
    // of reference for other nodes
    this.head = null;
  }
  // Calls the provided function with every node of the chain and the index of the node
  forEach(fn) {
    let node = this.head;
    let counter = 0;
    
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
  // Returns the node at the provided index
  getAt(index) {
    let node = this.head;
    let counter = 0;
    // Will run until either node is null or the node at index is found
    while (node) {
      if (counter === index) {
        return node;
      }
      
      counter++;
      // Move to the next node
      node = node.next;
    }
    // Return null if the index is out of range of the size of the list
    // The while loop will either return a node or exit before reaching this
    return null;
  }
  // Returns the first node of the list
  getFirst() {
    return this.head;
  }
  // Returns the last node of the list
  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next
    }
  }
  // Create and insert a new node at provided index.
  //  If index is out of bounds, add the node to the end of the list.
  insertAt(data, index) {
    // Verify list is not empty or if index is out of bounds
    if (!this.head) {
      this.head = new Node(data);
      return;
    } 
    // Handle case when inserting in the 0th index
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    // Insert in a middle or the last position (when index is out of bounds)
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
  // Inserts a node in the head position
  insertFirst(data) {
    // Creates the relationship between nodes
    // Updates the head node to reflect the newly created node
    this.head = new Node(data, this.head);
  }
  // Inserts a note at the end of the list
  insertLast(data) {
    const last = this.getLast();
    // Check if the list is empty
    if (last) {
      // There are nodes in the list
      last.next = new Node(data);
    } else {
      // The list is empty, so create a new head node
      this.head = new Node(data);
    }
  }
  // Removes node at the provided index
  removeAt(index) {
    if (!this.head) {
      return;
    }
    
    if (index === 0) {
      // Remove the first node when the index is 0
      this.head = this.head.next;
    }

    const previous = this.getAt(index - 1);
    // Check if the index is out of bounds    
    if (!previous || !previous.next) {
      return;
    }

    previous.next = previous.next.next;
  }
  // Removes only the first node of the list
  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }
  // Removes the final node in the list chain
  removeLast() {
    if (!this.head) {
      return;
    }
    // Handles lists < 2 in lenghht
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let node = this.head;
    let previous = node;

    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }
  // Returns the number of nodes in the linked list
  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }
}

module.exports = { Node, LinkedList };
