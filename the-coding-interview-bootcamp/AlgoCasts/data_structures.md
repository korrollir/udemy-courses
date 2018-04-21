# Data Structures

- Ways of organizing information with optimal 'runtime complexity' for adding, editing, or removing records.
- JavaScript natively implements several data structures.
  * JS Array functionality ecompansses what a queue does.
- **You will be asked about 'inferior' data structures**.

### Queue

- Think of waiting in a line at a counter.
- First in, first out (FIFO).
- Enqueuing: adding a record.
- Dequeing: removing a record.
- Queue in JavaScript
  * Make an array and only expose `.unshift()` and `.pop()`.
  
  1.  Create a new empty queue: `const q = new Queue();`
  2.  Add a record to a queue: `q.add(1);`
  3.  Remove record at the end of a queue: `q.remove();`
