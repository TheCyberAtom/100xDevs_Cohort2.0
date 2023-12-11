//---------------------------
//    LOOPS IN JAVASCRIPT
//---------------------------

// Dumb way to calculate sum of n numbers;
let dumbSum = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;
console.log("Dumb Sum : ", dumbSum);

// For loop to calculate the same
let loopSum = 0;
for (let i = 1; i <= 10; i++) {
  loopSum = loopSum + i;
}
console.log("Loop Sum : ", loopSum);
