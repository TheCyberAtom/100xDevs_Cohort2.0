/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Return False if both string lengths are not equal
  if (str1.length !== str2.length) return false;

  // To store occurance of character of str1
  let freq1 = {};
  // Converting to Lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Storing str1 character's frequency
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] in freq1) freq1[str1[i]]++;
    else freq1[str1[i]] = 1;
  }

  // Decreasing count from freq1 if that character is also in str2, if not return false
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] in freq1) freq1[str1[i]]--;
    else return false;
  }

  // If any frequency is not zero means character's count are not equal
  for (let i = 0; i < freq1.length; i++) {
    if (freq1[i] !== 0) return false;
  }

  // Return true if all check passed
  return true;
}

module.exports = isAnagram;
