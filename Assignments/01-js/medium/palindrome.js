/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str == null) {
    return false;
  }

  // Convert to lowercase and remove non-alphanumeric characters
  const formattedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let start = 0;
  let end = formattedString.length - 1;

  // Loop to compare characters from start and end
  while (start < end) {
    if (formattedString[start++] !== formattedString[end--]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
