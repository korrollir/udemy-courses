// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  // Create two pointers at the start of the list.
  let slow = list.getFirst();
  let fast = list.getFirst();
  // Advance fast forward by n.
  // Moves fast n elements in front of slow.
  while (n > 0) {
    fast = fast.next;
    n--;
  }
  // Iterate until fast.next returns null.
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  
  return slow;
}

module.exports = fromLast;
