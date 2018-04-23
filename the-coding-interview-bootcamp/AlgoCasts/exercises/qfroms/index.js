// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  /* Remember this is about stacking and unstacking data entries within the stacks 
    to simulate use a queue */
  constructor() {
    this.dataStack = new Stack();
    this.tempStack = new Stack();
  }

  add(record) {
    this.dataStack.push(record);
  }

  remove() {
    while (this.dataStack.peek()) {
      this.tempStack.push(this.dataStack.pop());
    }
    // Be careful to set this variable AFTER adding to tempStack
    const record = this.tempStack.pop();

    while (this.tempStack.peek()) {
      this.dataStack.push(this.tempStack.pop());
    }    

    return record;
  }

  peek() {    
    while (this.dataStack.peek()) {
      this.tempStack.push(this.dataStack.pop());
    }
    // Be careful to set this variable AFTER addinng to tempStack
    const record = this.tempStack.peek();

    while (this.tempStack.peek()) {
      this.dataStack.push(this.tempStack.pop());
    }

    return record;
  }
}

module.exports = Queue;
