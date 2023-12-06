/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  // Storing first element as a largest element
  let largest = numbers[0];

  // Looping through numbers array to find the largest
  for (let i = 1; i < numbers.length; i++) {
    // Assign element to largest if element is less than largest
    if (largest < numbers[i]) {
      largest = numbers[i];
    }
  }

  // Return largest
  return largest;
}

module.exports = findLargestElement;
