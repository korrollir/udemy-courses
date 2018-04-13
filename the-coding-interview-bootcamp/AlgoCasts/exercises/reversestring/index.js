// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  /*
    Easiest solution -- Avoid
    return str.split('').reverse().join('');
  */
 
  /*
    Use for...of instead of for loop when possible.  Reduces typos.
    let reversed = '';

    for (let character of str) {
      reversed = character + reversed;
    }

    return reversed;
  */
  
  /* More advanced version */
  return str.split('').reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;
