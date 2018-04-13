// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  /*
    Easiest
    return str === str.split('').reverse().join('');
  */

 /* 
    For ... of solution
  
    let reversed = '';

    for (character of str) {
      reversed = character + reversed;
    }

    return str === reversed;
  */

 /* Problem with this solution is that it will double compare */
 return str.split('').every((char, i) => {
  return char === str[str.length - i - 1];
 });
}

module.exports = palindrome;
