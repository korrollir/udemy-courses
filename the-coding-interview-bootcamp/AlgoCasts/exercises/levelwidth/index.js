// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  // Breadtf-first array
  // level will be used to denote each level while counting
  const arr = [root, 'end'];
  // Array holding width of each level
  const counters = [0];
  // Will iterate until the string indicator is all that is remaining
  while (arr.length > 1) {
    const node = arr.shift();

    if (node === 'end') {
      counters.push(0);
      arr.push('end');
    } else {
      // Remove the node and place the children at the end of the array
      arr.push(...node.children);
      // Increment the counters array at the current level
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

module.exports = levelWidth;
