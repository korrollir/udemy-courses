// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, tier = '') {
  /* Iterative Solution */
  // // Calculate midpoint of the pyramid
  // const midpoint = Math.floor((2 * n - 1) / 2);
  // // Start a row
  // for (let row = 0; row < n; row++) {
  //   // Create a fresh stair string
  //   let tier = '';
  //   // Iterate through columns to assign the correct character
  //   // Each step has a width of n + n - 1 (e.g. 3 steps is 5 wide, 4 is 7, etc)
  //   for (let column = 0; column < 2 * n - 1; column++) {
  //     // Determine whether to add a # or a space
  //     // The midpoint boolean sets bounds
  //     if (midpoint - row <= column && midpoint + row >= column) {
  //       tier += '#';
  //     } else {
  //       tier += ' ';
  //     }
  //   }

  //   console.log(tier);
  // }

  /* Recursive Solution */
  const midpoint = Math.floor((2 * n - 1) / 2);
  // Base case
  if (row === n) {
    return;
  }
  // Case for hitting end of the row
  if (2 * n - 1 === tier.length) {
    console.log(tier);
    return pyramid(n, row + 1);
  }
  // Modify the tier based on position
  if (midpoint - row <= tier.length && midpoint + row >= tier.length) {
    tier += '#';
  } else {
    tier += ' ';
  }
  
  pyramid(n, row, tier);
}

module.exports = pyramid;
