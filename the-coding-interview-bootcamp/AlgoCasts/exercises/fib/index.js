// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


/* TODO: Memorize Memoization solution */
// Memoization - store the arguments of each function call along with the result.
// If the function is called again with the same arguments, return the precomputed
// result, rather than running the function again.
// Slow fib function -> Memoizer function -> Fast, memoized fib function
function memoize(fn) {
  const cache = {};

  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    // Call slowFib with the supplied argument of the original call
    const result = fn.apply(this, args);
    // Store the result in the cache object
    cache[args] = result;

    return result;
  }
}

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
  
const fib = memoize(slowFib);

// function fib(n) {
//   /* Iterative solution - O(n) */
//   // const fibSequence = [0, 1];

//   // for (let i = 1; i <= n; i++) {
//   //   fibSequence.push(fibSequence[i] + fibSequence[i - 1]);
//   // }

//   // return fibSequence[n];
  
//   /* TODO: Memorize Recursive solution - O(2 ^ n) */
//   // Base case
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

module.exports = fib;
