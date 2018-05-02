// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  // Declare two pointers, slow and fast/
  let slow = list.head;
  let fast = list.head;
  // Iterate until slow === fast or fast.next && fast.next.next !=== null
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    // slow === fast signifies a circular list
    if ( slow === fast) {
      return true;
    }
  }
  // Return false if the list only contains two or fewer nodes or the while loop
  // finds the end of the list (fast.next or fast.next.next is null)
  return false;
}

module.exports = circular;
