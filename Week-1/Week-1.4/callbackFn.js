//------------------------------
//    CALLBACKS IN JAVASCRIPT
//------------------------------

// A callback function is a function that is passed as an argument to another function.

// Example : without callbacks
function square(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}

// Return sum of squares of 2 numbers
function sumOfSquares(a, b) {
  let ans1 = square(a);
  let ans2 = square(b);
  return ans1 + ans2;
}

// Return sum of cubes of 2 numbers
function sumOfCubes(a, b) {
  let ans1 = cube(a);
  let ans2 = cube(b);
  return ans1 + ans2;
}

console.log("sum of squares without callbacks : ", sumOfSquares(2, 2));
console.log("sum of cubes without callbacks : ", sumOfCubes(2, 2));

// Example : with callbacks

function sumOfSomething(a, b, callbackFn) {
  let ans1 = callbackFn(a);
  let ans2 = callbackFn(b);
  return ans1 + ans2;
}

console.log("sum of squares with callbacks : ", sumOfSomething(2, 2, square));
console.log("sum of cubes with callbacks : ", sumOfSomething(2, 2, cube));
