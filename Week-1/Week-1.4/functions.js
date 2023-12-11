//------------------------------
//    FUNCTIONS IN JAVASCRIPT
//------------------------------

// A function in javascript is a set of statements that performs a task or calculate a value.

function findSum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

let result1 = findSum(10);
console.log("Sum of numbers till 10 : ", result);

let result2 = findSum(100);
console.log("Sum of numbers till 100: ", result2);
