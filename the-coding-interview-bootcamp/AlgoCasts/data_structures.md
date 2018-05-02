# Data Structures

- Ways of organizing information with optimal 'runtime complexity' for adding, editing, or removing records
- JavaScript natively implements several data structures
  * JS Array functionality ecompansses what a queue does
- **You will be asked about 'inferior' data structures**

### Queue

- Think of waiting in a line at a counter
- First in, first out (FIFO)
- Enqueuing: adding a record
- Dequeing: removing a record
- Queue in JavaScript
  * Make an array and only expose `.unshift()` and `.pop()`
  * `.peek()` returns the "top" record
  
  1.  Create a new empty queue: `const q = new Queue();`
  2.  Add a record to a queue: `q.add(1);`
  3.  Remove record at the end of a queue: `q.remove();`

### Stack

- Similar to Queue
- First in, last out (FILO)
- Stack in JavaScript
  * `.push()` adds a record to the stack
  * `.pop()` removes the "top" record in the stack
  * `.peek()` returns the "top" record without popping it

### Linked Lists

  - An ordered collection of data containing a set of nodes
    * Contains data and a reference to the next link
    * AKA a chain of nodes
  - Terminology
    * Head: First node
    * Tail: Last node
      - Identified by it containing no reference to another node
    * Node
      - Contains data (array, string, object, etc)
      - Reference to the next node in the linked list
        * `nodeOne.next = nodeTwo;`
  - Example
    ```const n1 = new Node('Hi');
       n1.data //'Hi'
       n1.next // null
       const n2 = new Node('There', n1);
       n2.next // returns n1```
  - Common solutions
    * Iterate using two pointers
      - Midpoint
        * Slow pointer: 1 step per iteration
        * Fast pointer: 2 steps per iteration
        * When fast.next && fast.next.next return null, slow is the midpoint
      - Circular test
        * Same as midpoint, except an embedded `if` statement checking for 
          `slow === fast` to indicate a circular list.
      - `n` fromLast
        * Two pointers at the head
        * Move one pointer forward `n` places
        * Begin moving the two pointers forward one node until the first pointer
          returns null.
        * The second pointer is `n` from the tail