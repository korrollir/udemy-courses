// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  /* My initial solution

    Can do the longer version of splitting then looping through to reverse.
    let reversed = n.toString().split('').reverse();

    for (character of reversed) {
      if (character === '0') {
        reversed.shift();
      }
    }

    if (Math.sign(n) === -1) {
      reversed.unshift('-');
    } 
    
    return parseInt(reversed.join(''), 10);
  */
  /* Grider's solution */
  const reversed =  n.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
