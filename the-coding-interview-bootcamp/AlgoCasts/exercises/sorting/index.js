// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// Bubble sort at worst case is O(n ^ 2)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = null;
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}
// "The prove me wrong" sorting algorithm
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Assume the element at 'i' is the least in the array
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    // Swap the elements
    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}
// Requires recursion
function mergeSort(arr) {
  // Base case
  if (arr.length === 1) {
    return arr;
  }
  // Determine midpoint of the array
  const center = Math.floor(arr.length / 2);
  // Split the array into two equal halves
  const left = arr.slice(0, center);
  const right = arr.slice(center);
  // Recursively subdivide the arrays and marge them together
  return merge(mergeSort(left), mergeSort(right));
}
// Helper function for mergeSort
function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  // Spread operator to concat the arrays
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
