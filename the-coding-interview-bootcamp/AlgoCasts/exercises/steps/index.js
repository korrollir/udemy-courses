// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// row argument belongs to recursive solution
function steps(n, row = 0, stair = '') {
  /* My Solution */
  // for (let i = 1; i <= n; i++) {
  //   let step = '';
  //   // First loop will add the number of # for each step
  //   for (let j = 1; j <= i; j++) {
  //     step += '#';
  //   }
  //   // If the current step is less than n, loop through and add spaces at the end
  //   if (i < n) {
  //     for (let k = 0; k < n - i; k++) {
  //       step += ' ';
  //     }
  //   }

  //   console.log(step);
  // }
  /* Grider Solution - Recommended */
  // for (let row = 0; row < n; row++) {
  //   let stair = ''; 

  //   for (let column = 0; column < n; column++) {
  //     if (column <= row) {
  //       stair += '#';
  //     } else {
  //       stair += ' ';
  //     }
  //   }

  //   console.log(stair);
  // }

  /* Grider Recursion Solution */
  // Base case - All done
  if (n === row) {
    return;
  }
  // Case of hitting end of a row
  if (n === stair.length) {
    console.log(stair);
    // Do not modify stair, because each row will start with an empty string
    return steps(n, row + 1);
  }
  // Do the work to build stair
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  // Call the function again with a mutated argument
  steps(n, row, stair);
}

module.exports = steps;
