// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/* For Solution 1 */
function mapChars(str) {
  let charMap = {};

  for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char]++ || 1;
  }

  return charMap;
}

/* For Solution 2 */
function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagrams(stringA, stringB) {
  /* Solution 1
  const charMapA = mapChars(stringA);
  const charMapB = mapChars(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for(let char in charMapA) {
    if(charMapA[char] !== charMapB[char]) {
      return false;
    }
  }

  return true;
  */

  /* Solution 2 */
  return cleanString(stringA) === cleanString(stringB);
  // There are performance issues when using the chained methods in the helper function 
}

module.exports = anagrams;
