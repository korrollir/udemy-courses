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
class LinkedList {
  constructor() {
    this.head = null;
  }
  // Empties the list of any nodes
  clear() {
    // With the head being equal to null, the linked list does not have any point
    // of reference for other nodes
    this.head = null;
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
    let tail = node;

    while (node) {
      tail = node;
      node = node.next;
    }

    return tail;

    /* Grider's method - differs at the while loop
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next
    } */
  }
  // Inserts a node in the head position
  insertFirst(data) {
    // Creates the relationship between nodes
    // Updates the head node to reflect the newly created node
    this.head = new Node(data, this.head);
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
