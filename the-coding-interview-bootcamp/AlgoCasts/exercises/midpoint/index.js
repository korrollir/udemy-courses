// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  // Create two temp vars (slow and fast) that point at the first node of the list.
  let slow = list.head;
  let fast = list.head;

  // When the fast pointer receives null on fast.next or fast.next.next, slow will be 
  // at the midpoint
  while(fast.next && fast.next.next) {
    // For each step of the loop, the slow pointer will move forward one place, and
    // the fast pointer will move forward two.
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

module.exports = midpoint;
